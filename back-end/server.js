/*code pour le server node*/

/*importer le package http de node ce qui permet de créer un server*/
const http = require("http");
/*importation de l'application du fichier app.js vers server.js*/
const app = require("./app");

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

/*création du port sur lequel le serveur doit "écouter", il doit normalement regarder sur le port 3000 ou autre grâce à (||), n
"normalize revoit vers un port valide"*/
const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

/*"errorHandler" recherches les différentes erreurs et les gère de manière appropriée. c'est ensuite enregistré dans le serveur*/
const errorHandler = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port:" + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + "require elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + "is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

/*création du serveur grâce à http de node + createServer + utilisation de "app" importer du server.js*/
const server = http.createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port" + port;
  console.log("Listening on" + bind);
});

server.listen(port);
