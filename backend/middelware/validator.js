const { body, validationResult } = require("express-validator");

const registerRules = [
  body("userName", "Name is required").not().isEmpty(),
  body("email", "Verify your mail adress").isEmail().normalizeEmail(),
  body("password", "password must have 5 characters").isLength({ min: 5 }),
];
const loginRules = [
  body("email", "Verify your mail adress").isEmail().normalizeEmail(),
  body("password", "password is empty").not().isEmpty(),
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = { registerRules, validator, loginRules };
