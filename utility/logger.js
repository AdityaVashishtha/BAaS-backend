"use strict";

const winston = require('winston');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const logger = winston.createLogger({    
    format: format.json(),
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({
            filename: 'error.log',
            level: 'error',
            timestamp: true
        }),
        new winston.transports.File({
            filename: 'combined.log',
            timestamp: true
        })
    ]
});

// //
// // If we're not in production then log to the `console` with the format:
// // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// // 
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
        colorize: true,
    }));
}
var LOG_MEM = [];
const LOG_MEM_REFRESH_COUNT = 100;

module.exports = logger;

module.exports.LOG = function(message) {
    let timestamp = new Date().toString();
    logger.info(message,{timestamp: timestamp});
    setInLOG_MEM('info',message,timestamp);
}

module.exports.ERROR = function(message) {
    let timestamp = new Date().toString();
    logger.error(message,{timestamp: new Date().toString()});
    setInLOG_MEM('error',message,timestamp);
}

function setInLOG_MEM(type,message,timestamp) {
    if(LOG_MEM.length <= LOG_MEM_REFRESH_COUNT) {
        LOG_MEM.push(`[${type}] ${message} ${timestamp}`)
    } else {
        LOG_MEM.shift();
        LOG_MEM.push(`[${type}] ${message} ${timestamp}`)
    }
}

module.exports.getFreshLOG = function() {
    return LOG_MEM;
}