const express = require("express");
const { register, login, current } = require("../controllers/authController");
const isAuth = require("../middelware/isAuth");
const {
  registerRules,
  validator,
  loginRules,
} = require("../middelware/validator");
const router = express.Router();

//registre
//method post
// req.body
router.post("/signup", registerRules, validator, register);

//login
//method post
// req.body
router.post("/signin", loginRules, validator, login);

//get current user
// method get
router.get("/current", isAuth, current);

module.exports = router;
