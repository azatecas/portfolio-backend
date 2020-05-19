const rateLimit = require("express-rate-limit");


const authRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, //15 min 
    max: 100 //number of request per 15 mins
});

module.exports = authRateLimiter;