const mongoose = require('mongoose');

const ApplicationConfigSchema = mongoose.Schema({    
    name: {
        type: String,
        required: true,
        unique: true,
    },
    config: {
        type: Object,
        required: true,        
    },
    createdAt: {
        type:Date,    
    },
    modifiedAt: {
        type:Date
    }    
});

const ApplicationConfig = module.exports = mongoose.model('ApplicationConfig',ApplicationConfigSchema);