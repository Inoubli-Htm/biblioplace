const Livre = require("../models/Livre");

exports.addlivre = async (req, res) => {
  const {
    livreName,
    auteur,
    description,
    typeLivre,
    langue,
    editeur,
    imageUrl,
  } = req.body;
  try {
    //check user exists
    // const foundlivre = await Livre.findOne({ livreName });
    // if (foundlivre) {
    //   return res.status(400).send("livre already exists");
    // }
    const livre = new Livre({
      livreName: req.body.livreName,
      auteur: req.body.auteur,
      description: req.body.description,
      typeLivre: req.body.typeLivre,
      langue: req.body.langue,
      editeur: req.body.editeur,
      imageUrl: req.body.imageUrl,
      userId: req.user.id,
    });

    await livre.save();
    res.status(201).send({ msg: "livre created", livre });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.alllivres = async (req, res) => {
  try {
    const livres = await Livre.find();
    res.status(200).send({ msg: "All livres", livres });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.getuserlivres = async (req, res) => {
  try {
    const livres = await Livre.find({ userId: req.user.id }).populate(
      "userId",
      ["userName"]
    );
    res.status(200).send({ msg: "All livres", livres });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.deletelivre = async (req, res) => {
  const { id } = req.params;
  try {
    await Livre.findByIdAndDelete(id);
    res.status(200).send("livre deleted");
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.updatelivre = async (req, res) => {
  const { id } = req.params;
  try {
    const updatelivre = await Livre.findByIdAndUpdate(
      id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send({ msg: "livre updated", updatelivre });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.getonelivre = async (req, res) => {
  const { id } = req.params;
  try {
    const livre = await Livre.findById(id);
    res.status(200).send({ msg: "livre finded", livre });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.updateBookImg = async (req, res) => {
  try {
    await Livre.findByIdAndUpdate(req.params.id, {
      $set: { imageUrl: req.file.filename },
    });

    res.status(200).send("Image uploaded");
  } catch (error) {
    res.status(500).send("server error");
  }
};
