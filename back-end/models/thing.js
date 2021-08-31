const mongoose = require("mongoose");

/*cela permet de connaitre le schéma pour la création d'objet*/
const thingSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  userId: { type: String, required: true },
  /*prix toujours en centime pour éviter les problème d'arithmétique*/
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Thing", thingSchema);
