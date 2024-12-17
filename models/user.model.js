const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [3,'Username must be at least 3 characters long']
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: [13,'Email must be at least 13 characters long']
    },

    password: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        minLength: [5,'Password must be at least 5 characters long']
    }
})

const user = mongoose.model('user',userSchema);
module.exports = user;