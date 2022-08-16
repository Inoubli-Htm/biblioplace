const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },

  userAdress: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Bibliophile", "Administrateur"],
    default: "Bibliophile",
  },
  phone: {
    type: String,
  },
  userId: {
    type: String,
  },
  profession: {
    type: String,
  },
  imageUrl: String,
});

module.exports = mongoose.model("User", userSchema);
