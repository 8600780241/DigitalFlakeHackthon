const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).send('Access Denied');
    try {
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified.user;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
        console.log(error)
    }
}

module.exports = verifyToken;