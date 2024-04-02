const express = require("express");
const app = express();
const router = express.Router();
const { userRegister, userLogin, userLogout } = require('../Controllers/userController');

router.post('/signup', userRegister);
router.post('/login', userLogin);
router.post('/logout', userLogout);

module.exports = router;