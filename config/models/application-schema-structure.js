const mongoose = require('mongoose');
const validator = require('validator');
const waterfall = require('async/waterfall');

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
        type: Date,
    },
    access: {
        type: String,
        enum: ['P', 'H']
    }
});

const ApplicationsSchemaStructure = module.exports = mongoose.model('SchemaStructure', ApplicationsSchema);

module.exports.getSchemaModel = function (schemaName, structure) {
    return mongoose.model(schemaName, mongoose.Schema({}, {
        strict: false
    }));
}

var isUpdateRoute = false;

module.exports.layeredValidationBeforeInsert = function (row, schema, callback) {
    let query = {
        name: schema
    };    
    isUpdateRoute = false;
    if(row.isUpdateRoute) {
        delete row.isUpdateRoute;
        isUpdateRoute=true;
    }
    let response = {
        error: true,
        message: "",
    };
    ApplicationsSchemaStructure.findOne(query, (err, data) => {
        if (err) callback(err, null);
        else if (data !== null) {
            schemaMatch(row, data.structure, schema, (response) => {
                if (response.error) {
                    console.log("Matching Structure Error ...")
                    console.log(response);
                    callback(null, response);
                    return;
                } else {
                    response = validateTypes(row, data.structure, schema);
                    if (response.error) {
                        console.log("Validation Type Error ...")
                        console.log(response);
                        callback(null, response);
                        return;
                    } else {
                        callback(null, response);
                        return;
                    }
                }
            });
        } else {
            callback(null, null);
            return;
        }
    });
    return;
}

function schemaMatch(row, structure, schemaName, callback) {
    let flag = true;
    let bodyKeys = Object.keys(row);
    let structureKeys = Object.keys(structure);
    let bodyKeysLength = bodyKeys.length;
    let structureKeysLength = structureKeys.length;
    //Matching body with structure to 
    console.log('Matching Structure - Body');
    for (i = 0;(i < bodyKeysLength); i++) {        
        if ((typeof structure[bodyKeys[i]]) === 'undefined') {            
            callback({
                error: true,
                message: "Error: Request body values does not match the schema Structure!",
            });
            return;
        }
    }
    //Matching required Constraint
    console.log('Matching Required Constraint');
    for (i = 0; i < structureKeysLength; i++) {
        let index_key = structureKeys[i];        
        console.log("Is update route "+isUpdateRoute);
        if (structure[index_key].isRequired || structure[index_key].isUnique) {                
            console.log(row[index_key]);
            if ((typeof row[index_key] === 'undefined') || row[index_key] === null || ((row[index_key].toString() != null) && (row[index_key].toString().length <= 0 )) ) {
                callback({
                    error: true,
                    message: "Error: Attribute '" + index_key + "' is required in schema but not provided!",
                });
                return;
            }
        } else if(
                (!isUpdateRoute)&&
                (!structure[index_key].isRequired) &&
                (structure[index_key].default && structure[index_key].default.toString().length > 0) &&
                (!row[index_key])
                ) {
                // Default when not required and the value of the row is not present
                if((typeof row[index_key] === 'undefined'))
                    row[index_key] = structure[index_key].default;                
        }
    }
    //Matching Unique key constraint
    console.log('Matching Unique Attribute Property ...' + bodyKeysLength);
    waterfall(
        bodyKeys.map((item) => {
            return function (res, done) {
                console.log("Outside unique");
                if(done && res != null)
                    done(null,res);
                else if (structure[item].isUnique) {
                    console.log("Check unique " + item);
                    let attrName = item;
                    let query = {};
                    query[item] = convertToStandard(row[item], structure[item].type);
                    if(structure[item].encryptInHash) {
                        let crypto = require('crypto');
                        let hash = crypto.createHash('sha256').update(''+row[item]).digest('base64');                        
                        query[item] = hash;
                    }
                    console.log(query);
                    let schema;
                    try {
                        schema = mongoose.model(schemaName);
                    } catch (err) {
                        schema = ApplicationsSchemaStructure.getSchemaModel(schemaName, {});
                    }
                    console.log("Unique key constraint Check start for " + item);
                    // console.log(query);
                    flag = false;
                    schema.findOne(query, (err, data) => {
                        if (err) throw err;
                        else if (data != null) {
                            console.log("Not Unique !! Fixed ? ");
                            console.log(data);
                            if (done) {
                                console.log("SENT Unique !! Fixed ? ");
                                done(null, {
                                    error: true,
                                    message: "Error: Attribute '" + attrName + "' is unique no duplicate allowed!",
                                });
                            } else {
                                console.log("SENT2 Unique !! Fixed ? ");
                                res(null, {
                                    error: true,
                                    message: "Error: Attribute '" + attrName + "' is unique no duplicate allowed!",
                                });
                            }
                            //return;
                        } else {
                            if (done)
                                done(null, null);
                            else {
                                res(null, null);
                            }
                        }
                    });
                } else {
                    //console.log("__ " + res);
                    if (done)
                        done(null, null);
                    else {
                        res(null, null);
                    }
                }
            }
        }), (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                if (result) {
                    callback(result);
                } else if ((typeof result == 'undefined')) {
                    callback({
                        error: true,
                        message: "Some error in insert request"
                    })
                } else {
                    callback({
                        error: false
                    });
                }
            }
        });
}

//Function for Validation of data types as per schema 
function validateTypes(row, structure, schemaName) {
    let bodyKeys = Object.keys(row);
    let structureKeys = Object.keys(structure);
    let bodyKeysLength = bodyKeys.length;
    let structureKeysLength = structureKeys.length;
    //Matching body with structure to 
    for (i = 0; i < bodyKeysLength; i++) {
        if (!isValid(row[bodyKeys[i]], structure[bodyKeys[i]])) {            
            return {
                error: true,
                message: "Error: Data type not match for '" + bodyKeys[i] + "' !",
            };
        } else {            
            row[bodyKeys[i]] = convertToStandard(row[bodyKeys[i]], structure[bodyKeys[i]].type);
            if(structure[bodyKeys[i]].encryptInHash) {
                let crypto = require('crypto');
                let hash = crypto.createHash('sha256').update(''+row[bodyKeys[i]]).digest('base64');
                console.log(row[bodyKeys[i]] + '  ' + hash);
                row[bodyKeys[i]] = hash;
            }
        }
    }
    return {
        error: false,
        row: row,
    }
}

function isValid(value, structure) {
    let type = structure.type;
    let pattern = structure.regexPattern;
    let enumValues = structure.enumValues;
    let tempValue = value;        
    value = value.toString().trim();
    if (value.length <= 0)
        return true;
    switch (type) {
        case 'string':
            return true;
        case 'number':
            return validator.isNumeric(value);
        case 'boolean':
            return validator.isBoolean(value);
        case 'json':
            value = JSON.stringify(tempValue);            
            return validator.isJSON(value);
        case 'enum':
            if(enumValues) {
                return validator.isIn(value,enumValues);
            } else {
                return false;
            }
        case 'date-iso':
            return validator.isISO8601(value);
        case 'timestamp':
            return ((new Date(value)).getTime() > 0);
        case 'integer':
            return validator.isInt(value);
        case 'decimal-only':
            return validator.isDecimal(value);
        case 'hexadecimal-number':
            return validator.isHexadecimal(value);
        case 'array':
                    value = JSON.stringify(tempValue);
                    if(validator.isJSON(value))
                        return (JSON.parse(value).constructor == Array);
                    else 
                        return false;
        case 'alphanumeric-only':
            return validator.isAlphanumeric(value);
        case 'email':
            return validator.isEmail(value);
        case 'url':
            return validator.isURL(value);
        case 'mobile-phone':
            return validator.isMobilePhone(value,'en-IN',{strictMode: true});
        case 'regex-validator':
            if(pattern)
                return validator.matches(value,pattern);
            else
                return false;
        default:
            return true;
    }
    return false;
}

function convertToStandard(value, type) {
    let tempValue = value;
    value = value.toString().trim();
    //console.log(value);
    if (value.length <= 0)
        return null;
    switch (type) {
        case 'string':
            return value;
        case 'number':
            return parseFloat(value);
        case 'boolean':
            return value == 'true' ? true : false;
        case 'json':
            return JSON.stringify(tempValue);
        case 'enum':
            return value;            
        case 'date-iso':
            return new Date(value);
        case 'timestamp':
            return new Date(value).valueOf();
        case 'integer':
            return parseInt(value);
        case 'decimal-only':
            return parseFloat(value);
        case 'hexadecimal-number':
            return value;
        case 'array':
            return JSON.stringify(tempValue);
        case 'alphanumeric-only':
            return value;
        case 'email':
            return value;
        case 'url':
            return value;
        case 'mobile-phone':
            return value;
        case 'regex-validator':            
            return value;
        default:
            return null;
    }
}

module.exports.validateBeforeInSchema = function (row, schema, callback) {
    let query = {
        name: schema
    };
    let returnBack = {
        success: true
    }
    ApplicationsSchemaStructure.findOne(query, (err, data) => {
        if (err) {
            callback(err, null);
        } else if (data) {
            let structure = data.structure;
            Object.keys(row).forEach(i => {
                let rowType = structure[i].type;
                if (!validateValueType(row[i], rowType)) {
                    returnBack = {
                        success: false,
                        message: 'Data Type does not match for :' + i,
                    };
                    callback(null, returnBack);
                }
            });
            if (returnBack.success) {
                callback(null, returnBack);
            }
        }
    });
}

function validateValueType(value, type) {
    switch (type) {
        case 'string':
            return true;
        case 'number':
            return !(isNaN(value.toString()));
        case 'decimal':
            return !(isNaN(value.toString()));
        default:
            return true
    }
    return false;
}