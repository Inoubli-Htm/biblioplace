const express = require("express");
const {
  adduser,
  allusers,
  deleteuser,
  updateuser,
  getoneuser,
  updateUserImg,
} = require("../controllers/userController");
const isAuth = require("../middelware/isAuth");
const userupload = require("../middelware/userupload");

const router = express.Router();

// add new user
//method post
//req.body
router.post("/adduser", adduser);

// get all users
// method get
router.get("/allusers", isAuth, allusers);

// remove user
// method delete
// req.params
router.delete("/deleteuser/:id", isAuth, deleteuser);

// update user
// method put
// req.params & req.body
router.put("/updateuser/:id", isAuth, updateuser);

// get one user
// method get
// req.params
router.get("/getoneuser/:id", isAuth, getoneuser);

// update image profile
// methode put
//private
// req.file

router.put("/uploadimg", isAuth, userupload.single("myPicture"), updateUserImg);

module.exports = router;
