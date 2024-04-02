const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
    },
    packedSize: {
        type: String
    },
    category: {
        type: String
    },
    mrp: {
        type: String
    },
    file: {
        type: String
    },
    status: {
        type: String
    }
});
productSchema.index({ '$**': 'text' });
const productmodel = mongoose.model("products", productSchema);


module.exports = productmodel;