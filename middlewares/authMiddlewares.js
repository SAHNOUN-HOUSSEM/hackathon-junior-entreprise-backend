require("dotenv").config()

const AppError = require("../utilities/AppError")
const asyncHandler = require("../utilities/asyncHandler")
const jwt = require("jsonwebtoken")

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET

module.exports.isAuthenticated = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader ? authHeader.split(" ")[1] : null
    if (!token) {
        throw new AppError('Unauthorized', 401)
    }
    jwt.verify(token, ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
            throw new AppError('Unauthorized', 401)
        }
        req.adminId = payload.adminId
        next()
    })
}

module.exports.isAccountOwner = (req, res, next) => {
    const currentAdminId = req.adminId;
    const { id} = req.params
    if(id !== currentAdminId){
        throw new AppError("you do not have the access to change someone else's credentials"  , 401)
    }
    next()
}
