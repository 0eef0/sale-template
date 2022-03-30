const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Must provide a username']
    },
    password: {
        type: String,
        required: [true, 'Must provide a password']
    },
});

// This is basic validation not advanced
module.exports = mongoose.model('users', userSchema);