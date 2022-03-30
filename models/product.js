const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, 'Must provide a name for product']
    },
    productPrice: {
        type: Number,
        required: [true, 'Must provide a price for product']
    },
    productImg: {
        type: String,
        required: [true, 'Must provide a link for product image']
    }
});

// This is basic validation not advanced
module.exports = mongoose.model('products', productSchema);