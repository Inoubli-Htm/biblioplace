const express = require("express");
const {
  addlivre,
  alllivres,
  deletelivre,
  updatelivre,
  getonelivre,
  updateBookImg,
  getuserlivres,
} = require("../controllers/livreController");

const isAuth = require("../middelware/isAuth");
const userupload = require("../middelware/userupload");
const router = express.Router();

// add new livre
// method post
//req.body
router.post("/addlivre", isAuth, addlivre);

// get all livres
// method get
router.get("/alllivres", alllivres);

// get user livres
// method get
router.get("/getuserlivres", isAuth, getuserlivres);

// remove livre
// method delete
// req.params
router.delete("/deletelivre/:id", isAuth, deletelivre);

// update livre
// method put
// req.params & req.body
router.put("/updatelivre/:id", isAuth, updatelivre);

// get one livre
// method get
// req.params
router.get("/getonelivre/:id", getonelivre);

// update image books
// methode put
//private
// req.file

router.put(
  "/uploadimg/:id",
  isAuth,
  userupload.single("myBook"),
  updateBookImg
);

module.exports = router;
