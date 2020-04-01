const rateLimit = require("express-rate-limit");


const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 min 
    max: 100 //number of request per 15 mins
});

module.exports = apiLimiter;