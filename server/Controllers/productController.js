const productmodel = require('../models/productmodel');

exports.addProduct = async (req, res) => {
    try {
        const { category, productName, packedSize, mrp, status } = req.body;
        if (!req.file) {
            console.log('No file uploaded');
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const file = req.file.path;
        const data = new productmodel({ category, productName, packedSize, mrp, file, status })
        await data.save();
        return res.status(200).send({
            message: "products successfully added"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error product added"
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const { name, packsize, category, MRP, status } = req.body;
        const data = await productmodel.findByIdAndUpdate(req.params.id, {
            name, packsize, category, MRP, status
        })
        return res.status(200).send({
            message: "data updated"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error product updated"
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const data = await productmodel.deleteMany(req.params)
        return res.status(200).send({
            "message": "data has deleted"
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error product deleted"
        })
    }
}

exports.searchProduct = async (req, res) => {
    try {
        const query = req.query.name;
        const items = await productmodel.find({ $text: { $search: query } });
        // console.log(items)
        return res.status(200).send({
            messsage: "data searched",
            items
        })
    }
    catch (error) {
        console.log(error);
        return res.status(400).send({
            message: "error occured",
            error
        })
    }
}

exports.getproduct = async (req, res) => {
    try {
        const products = await productmodel.find({});
        res.status(200).send({
            message: "products are get in"
        })
    }
    catch (error) {
        console.log(error, "products are not get it");
        return res.status(400).send({
            message: "error product get"
        })
    }
}