const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
const Teacher = require('../models/teacher/teacherModel')
const {verifyToken} = require("../helper/authHelper")
const rateLimit = require("express-rate-limit");


const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers 

    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    } 
    // we will get authorization like this: "Bearer hjbhjbjhb.asjhbca7jhchjbd7.dkjbakjbjk"\
    // but we will split this on space and get the second part i.e token
    const token = authorization.split(' ')[1]

    try {
        const {userId} = await verifyToken(token);
        req.user = await Teacher.findOne({ userId }).select('userId')
        next()
    } catch (error) {
        res.status(401).json({error: 'Request not authorized, or link may have expired !'})
    }

}


// create a rate limiter object with a limit of 100 requests per hour
const rateLimiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 1000, // limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again in an hour"
  });
  


module.exports = {
    requireAuth,
    rateLimiter
}