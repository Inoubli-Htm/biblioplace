const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "./client/public/imgprofile",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const userupload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    const fileType = /jpeg|jpg|png/gi;
    const mimeType = fileType.test(file.mimetype);
    if (mimeType) {
      cb(null, true);
    } else {
      cb(null, false);
    }
  },
});

module.exports = userupload;
