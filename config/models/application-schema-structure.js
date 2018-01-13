const mongoose = require('mongoose');

const ApplicationsSchemaStructure = mongoose.Schema({    
    name: {
        type: String,
        required: true,
        unique: true,
    },
    structure: {
        type: Object,
        required: true,        
    },
    createdAt: {
        type:Date,    
    },    
    access: {
        type: String,
        enum: ['P','H']
    }    
});

const DashboardUser = module.exports = mongoose.model('SchemaStructure',ApplicationsSchemaStructure);