// set up user schema in mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'guest',
        enum: ["guest", "staff", "superadmin"]
    },
    accessToken: {
        type: String
    }
});

const User = mongoose.model('user', userSchema);
module.exports = User;