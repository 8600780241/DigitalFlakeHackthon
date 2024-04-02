const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const morgan = require("morgan");
const dotenv = require("dotenv");
const db = require('./DB/db')
const userController = require('./Routes/userRoute');
const categoryController = require('./Routes/categoryRoute');
const productController = require('./Routes/productRoute');

const app = express();
dotenv.config();
db();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyparser.json());

app.use('/user', userController);
app.use('/category',categoryController);
app.use('/products',productController);

app.get('/', (req, res) => {
    console.log("ok");
    res.send("ok")
});

app.listen(process.env.PORT, () => {
    console.log("server is connected to the port 8000")
});