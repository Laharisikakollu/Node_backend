const models = require('../models');

const createUser = async (req, res, next) => {
    try {
        
        const user = await models.User.create(req.body)
        res.status(201).json({
            user
        })
        
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: "could not signup",
            error
        })
        next(error)
    }
}

module.exports = createUser;