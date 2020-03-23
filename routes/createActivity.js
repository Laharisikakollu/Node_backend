const models = require('../models');

const createActivity = async (req, res, next) => {
    try {
        
        const activity = await models.Activity.create(req.body)
        res.status(201).json({
            activity
        })
        
    }
    catch (error) {
        res.status(404).json({
            error
        })
    
    }
}

module.exports = createActivity;