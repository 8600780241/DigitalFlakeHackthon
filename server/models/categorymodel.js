const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    }
});
categorySchema.index({ '$**': 'text' });
const categorymodel = mongoose.model("category", categorySchema);


module.exports = categorymodel;