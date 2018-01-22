const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,        
    },
    signedIn: {
        type: Date,
        required: true
    }
});

const User = module.exports = mongoose.model('User',UserSchema);

