const mongoose = require('mongoose');

const UploadFile = mongoose.Schema({    
    name: {
        type: String,
        required: true        
    },
    author: {
        type: String,
        required: true,
    },
    accessType: {
        type: String,
        required: true
    },
    mimeType: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },    
    createdAt: {
        type: Date,
        required: true
    },
    // checksum: {
    //     type: String,
    //     required: true
    // }
});

const UploadFileSchema = module.exports = mongoose.model('UploadFile',UploadFile);