const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userDetails: {
        type: Object,
        required: [true, 'Must provide user details']
    },
});

// This is basic validation not advanced
module.exports = mongoose.model('purchases', productSchema);