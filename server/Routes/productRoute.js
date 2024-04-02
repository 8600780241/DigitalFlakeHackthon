const express = require("express");
const router = express.Router();
const { addProduct, updateProduct, deleteProduct, searchProduct, getproduct } = require('../Controllers/productController')
const multer = require('multer');
const fs = require('fs');
const verifyToken = require('../Verify/verifytoken');
const uploadDir = "./uploads";

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage });

router.get('/searchproduct', searchProduct);
router.post('/addproduct', upload.single('file'), addProduct);
router.put('/updateproduct/:id', updateProduct);
router.delete('/deleteproduct/:_id', deleteProduct);
router.get('/getproduct', verifyToken, getproduct);
module.exports = router;