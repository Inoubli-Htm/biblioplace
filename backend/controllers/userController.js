const User = require("../models/User");
const Livre = require("../models/Livre");

exports.adduser = async (req, res) => {
  const { userName, userAdress, email, password } = req.body;
  try {
    //check user exists
    const founduser = await User.findOne({ email });
    if (founduser) {
      return res.status(400).send("user already exists");
    }
    const user = new User({ userName, userAdress, email, password });
    await user.save();
    res.status(201).send({ msg: "user created", user });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.allusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ msg: "All users", users });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.deleteuser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.findByIdAndDelete(id);
    await Livre.deleteMany({ userId: id });
    res.status(200).send("user deleted");
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.updateuser = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  try {
    const userUpdated = await User.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "user updated", userUpdated });
  } catch (error) {
    res.status(500).send("server error");
  }
};
exports.getoneuser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).send({ msg: "user finded", user });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.updateUserImg = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $set: { imageUrl: req.file.filename },
    });
    res.status(200).send("Image uploaded");
  } catch (error) {
    res.status(500).send("server error");
  }
};
