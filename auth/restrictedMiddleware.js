const jwt = require("jsonwebtoken");
const {jwtSecret} = require('./secret');


module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if(authorization){
        console.log('auth',authorization);
        jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
            if(err){
                res.status(401).json({ message: "invalid credentials rm"});
            } else {
                req.decodedToken = decodedToken;
                next();
            }
        });
    } else {
        res.status(401).json({ YOU: "You Must Login to Continue"})
    }    
}