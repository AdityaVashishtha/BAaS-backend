const mongoose = require('mongoose');
const validator = require('validator');

const ApplicationsSchema = mongoose.Schema({    
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

const ApplicationsSchemaStructure = module.exports = mongoose.model('SchemaStructure',ApplicationsSchema);

module.exports.getSchemaModel = function(schemaName,structure) {
    return mongoose.model(schemaName,mongoose.Schema({}, { strict: false }));
}

module.exports.layeredValidationBeforeInsert = function(row,schema,callback) {
    let query = {name: schema};
    let response = { 
        error: true,
        message: "",
     };
    ApplicationsSchemaStructure.findOne(query,(err,data)=>{
        if(err) callback(err,null);
        else if (data !== null) {
            schemaMatch(row,data.structure,schema,(response)=>{
                if(response.error) {
                    console.log("Matching Structure Error ...")
                    console.log(response);                
                    callback(null,response);
                } else {
                    response = validateTypes(row,data.structure,schema);                
                    if(response.error) {
                        console.log("Validation Type Error ...")
                        console.log(response);
                        callback(null,response);
                    } else {
                        callback(null,response);
                    }                
                }
            });            
        } else {
            callback(null,null);
        }
    });  
}

function schemaMatch(row, structure,schemaName,callback) {
    let flag = true;
    let bodyKeys = Object.keys(row);
    let structureKeys = Object.keys(structure);
    let bodyKeysLength = bodyKeys.length;
    let structureKeysLength = structureKeys.length;
    //Matching body with structure to 
    console.log('Matching Structure - Body');
    for(i=0;i<bodyKeysLength && flag;i++) {
        if(typeof structure[bodyKeys[i]] == 'undefined') {
            flag = false;
            callback({
                error: true,
                message: "Error: Request body values does not match the schema Structure!",
            });
        } 
    }
    //Matching required Constraint
    console.log('Matching Required Constraint');
    for(i=0;i<bodyKeysLength && flag;i++) {
        if(structure[bodyKeys[i]].isRequired) {
            if(row[bodyKeys[i]] == null || row[bodyKeys[i]].toString().length <=0) {
                flag = false;
                callback({
                    error: true,
                    message: "Error: Attribute '"+bodyKeys[i]+"' is required in schema but not provided!",
                });                
            }  
        }        
    }    
    //Matching Unique key constraint
    console.log('Matching Unique - Body');
    for(i=0;i<bodyKeysLength && flag;i++) {
        if(structure[bodyKeys[i]].isUnique) {
            flag = false; 
            let attrName = bodyKeys[i];
            let query = {};
            query[bodyKeys[i]] = convertToStandard(row[bodyKeys[i]],structure[bodyKeys[i]].type);
            let schema;
            try {
                schema = mongoose.model(schemaName);
            } catch(err) {                
                schema = ApplicationsSchemaStructure.getSchemaModel(schemaName,{});
            }
            console.log("Unique key constraint Check start ...");
           // console.log(query);
            schema.findOne(query,(err,data)=>{
                if(err) throw err;
                else if(data != null) {
                    console.log("Not Unique !! Fixed ?");
                    //console.log(data);
                    callback({
                        error: true,
                        message: "Error: Attribute '"+attrName+"' is unique no duplicate allowed!",
                    });
                } else {
                    callback({
                        error: false
                    });
                }                    
            });
        }
        if(i == bodyKeysLength || flag == true) {
            callback({
                error: false
            });
        }
    }    
    //console.log(structure);
}

//Function for Validation of data types as per schema 
function validateTypes(row,structure,schemaName) {
    let bodyKeys = Object.keys(row);
    let structureKeys = Object.keys(structure);
    let bodyKeysLength = bodyKeys.length;
    let structureKeysLength = structureKeys.length;
    //Matching body with structure to 
    for(i=0;i<bodyKeysLength;i++) {
        if(!isValid(row[bodyKeys[i]],structure[bodyKeys[i]].type)) {
            return {
                error: true,
                message: "Error: Data type not match for '"+bodyKeys[i]+"' !",
            };
        } else {
            row[bodyKeys[i]] = convertToStandard(row[bodyKeys[i]],structure[bodyKeys[i]].type);
        }
    }
    return {
        error: false,
        row: row,
    }
}

function isValid(value,type) {
    value = value.toString().trim();
    if(value.length <= 0) 
        return true;
    switch(type) {
        case 'string': return true;
        case 'number': return validator.isNumeric(value);                
        case 'boolean': return validator.isBoolean(value);      
        case 'json': return validator.isJSON(value);
        case 'enum-todo': console.log("TODO ENUM"); return false;
        case 'date-iso': return validator.isISO8601(value);      
        case 'timestamp': return ((new Date(145689720)).getTime() > 0 );
        case 'integer': return validator.isInt(value);
        case 'decimal-only': return validator.isDecimal(value);
        case 'hexadecimal-number': return validator.isHexadecimal(value);
        case 'array': return (x.constructor == Array);
        case 'alphanumeric-only': return validator.isAlphanumeric(value);
        case 'email': return validator.isEmail(value);
        case 'url': return validator.isURL(value);  
        case 'mobile-phone': return validator.isMobilePhone(value);
        case 'regex-validator-todo': console.log("TODO Custom Validator"); return false;
        default: return true;
    }
    return false;
}

function convertToStandard(value,type){
    value = value.toString().trim();
    //console.log(value);
    if(value.length <= 0)
        return null;
    switch(type) {
        case 'string': return value;
        case 'number': return parseFloat(value);                
        case 'boolean': return value == 'true' ? true : false;      
        case 'json': return value;
        case 'enum-todo': console.log("TODO ENUM"); return false;
        case 'date-iso': return new Date(value);      
        case 'timestamp': return parseInt(value);
        case 'integer': return parseInt(value);                
        case 'decimal-only': return parseFloat(value);
        case 'hexadecimal-number': return value;
        case 'array': return value;
        case 'alphanumeric-only': return value;
        case 'email': return value;
        case 'url': return value;  
        case 'mobile-phone': return value;
        case 'regex-validator-todo': console.log("TODO Custom Validator"); return false;
        default: return false;
    } 
}

module.exports.validateBeforeInSchema = function(row,schema,callback) {
    let query = { name: schema};    
    let returnBack = {success: true}
    ApplicationsSchemaStructure.findOne(query,(err,data)=>{
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
        default: return true
    }
    return false;
}