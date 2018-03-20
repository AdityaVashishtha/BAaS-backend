const mongoose = require('mongoose');

const AnalyticsSchema = mongoose.Schema({    
    name: {
        type: String,
        required: true,
        unique: true,
    },
	data:{
		type: Object,
		required: true,
	},
    structure: {
        type: Object,
    },
    user:{
        type: String
    },
    createdAt: {
        type:Date,    
    },    
    access: {
        type: String,
        enum: ['P','H']
    }    
});

const AnalyticsSchemaStructure = module.exports = mongoose.model('AnalyticsSchemaStructure',AnalyticsSchema);
/*
module.exports.getSchemaModel = function(schemaName,structure) {
    return mongoose.model(schemaName,mongoose.Schema({}, { strict: false }));
}

module.exports.validateBeforeInSchema = function(row,schema,callback) {
    let query = { name: schema};    
    let returnBack = {success: true}
    AnalyticsSchemaStructure.findOne(query,(err,data)=>{
        if(err) {
            callback(err,null);
        }
        else if(data) {            
            let structure = data.structure;
            Object.keys(row).forEach(i=> {
                let rowType = structure[i].type;
                if(!validateValueType(row[i],rowType)) {                    
                    returnBack = {
                        success: false,
                        message: 'Data Type does not match for :'+i,
                    };
                    callback(null,returnBack);
                }            
            });
            if(returnBack.success) {
                callback(null,returnBack);
            }
        }                        
    });        
}

function validateValueType(value,type) {
    switch(type) {
        case 'string': 
            return true;
        case 'number': 
            return !(isNaN(value.toString()));
        case 'decimal': 
            return !(isNaN(value.toString()));
        default: return false
    }
    return false;
}*/
