const express = require("express");
const router = express.Router();
const { addCategory, updateCategory, deleteCategory, searchCategory, getcategory } = require("../Controllers/categoryController");
const verifyToken = require('../Verify/verifytoken')

router.get('/getcategory', verifyToken, getcategory);
router.get('/searchcategory', searchCategory);
router.post('/addcategory', addCategory);
router.put('/updatecategory/:id', updateCategory);
router.delete('/deletecategory/:_id', deleteCategory);

module.exports = router;