const multer = require('multer');
const path = require("path")
const formato = ["images/jpeg", "images/jpg" ,"images/png"]


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../public/images'))
    },
    filename: function (req, file, cb) {
      const formatoFile = "img"  + '-' + Date.now() + path.extname(file.originalname);
      cb(null, formatoFile)
    }
  });

  
  const upload = multer({ storage });

  module.exports = {
    upload
  }