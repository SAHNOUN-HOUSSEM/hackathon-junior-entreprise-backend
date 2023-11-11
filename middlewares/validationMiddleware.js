const AppError = require("../utilities/AppError")

module.exports.validationMiddleware = (validationSchema) => {
    return (req, res, next) => {
        const { error } = validationSchema.validate(req.body)
        if (error) {
            const message = error.details.map(err => err.message).join(" , ")
            throw new AppError(message, 422)
        }
        next()
    }
}