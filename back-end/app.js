/*importation de express avec la commande require, 
bodyParser est bientot obsolète, est remplacer par express*/
const express = require("express");
/*Mongoose est un package qui facilite les interactions avec 
notre base de données MongoDB*/
const mongoose = require("mongoose");
const path = require("path");
/*ajout de CORS qui permet l'accès à l'API*/
const cors = require("cors");
const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");

mongoose
  .connect(
    "mongodb+srv://Muchu-Zozo:Eclipse72@cluster0.xs1d5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  /*apparait dans la console si connexion réussis*/
  .then(() => console.log("Connexion à MongoDB réussie !"))
  /*apparait dans la console si connexio échoué*/
  .catch(() => console.log("Connexion à MongoDB échouée !"));

/*création de la constance "app" qui sera notre application qui sera appeler avec la méthode "express*/
const app = express();

/*l'application utilisera cette fonction pour tout type de requète, de réponse, puis passera au suivant grâce au "use"*/
/*Les entêtes sont la pour dire que l'application peut accéder à l'API, que l'on peut utiliser les requêtes sans problème, ce qui permet aux utilisateur d'utiliser le site sans être bloqué par CORS*/
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  /*autorisation accès serveur*/
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  /*ne pas oublier de dire de passer à la prochaine fonction sinon ca frisera, on doit appeler "next"*/
  next();
});

/*utilisation de express au lieu de bodyParser, ce qui va pemettre
 que la méthode json va transformer le corps de la requête en objet javascript*/
app.use(express.json());
/*appel de CORS*/
app.use(cors());

app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauce", sauceRoutes);
app.use("/api/auth", userRoutes);

/*exportation de cette constante pour que les autres fichiers puisse l'utiliser*/
module.exports = app;

/* lolo@gmail.com  test*/
