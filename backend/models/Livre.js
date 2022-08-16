const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const livreSchema = new Schema({
  livreName: {
    type: String,
    required: true,
  },
  auteur: {
    type: String,
    required: true,
  },
  editeur: {
    type: String,
    required: true,
  },
  langue: {
    type: String,
    required: true,
    enum: ["Francais", "Arabe", "Anglais"],
    default: "Francais",
  },

  description: {
    type: String,
    required: true,
  },
  typeLivre: {
    type: String,
    required: true,
    enum: ["Drame", "Policier", "Poetique", "Informatique", "Documentaire"],
    default: "Drame",
  },
  imageUrl: String,
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Livre", livreSchema);
