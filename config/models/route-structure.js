const mongoose = require('mongoose');

const RouteSchema = mongoose.Schema({    
    name: {
        type: String,
        required: true,        
    },
    schemaName: {
        type: String,
        required: true
    },
    operationType: {
        type: String,
        required: true,        
    },
    requestBody: {
        type: [],    
    },    
    constraints: {
        type: [],        
    },
    accessControl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const RouteStructure = module.exports = mongoose.model('RouteStructure',RouteSchema);