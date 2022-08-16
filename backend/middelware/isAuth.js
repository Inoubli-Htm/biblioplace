const jwt = require("jsonwebtoken");

const isAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      return res
        .status(401)
        .send({ errors: [{ msg: "you are not authorized" }] });
    }
    const decoded = jwt.verify(token, process.env.secretkey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "you are not authorized" }] });
  }
};

module.exports = isAuth;
