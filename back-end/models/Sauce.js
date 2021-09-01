const mongoose = require("mongoose");

/*cela permet de connaitre le schéma pour la création d'objet*/
const SauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: Number, required: true },
  likes: { type: Number, required: true },
  dislikes: { type: Number, required: true },
  usersLiked: { type: ["String <userId>"], required: true },
  usersDisliked: { type: ["String <userId>"], required: true },
});

module.exports = mongoose.model("Sauce", SauceSchema);
