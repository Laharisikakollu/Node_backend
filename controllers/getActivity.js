const models=require('../models');

var jwt = require('jsonwebtoken')

const getActivity = async (req, res, next) => {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const user = await models.User.findOne({
            where: {
                userName: payload.userName
            }
        })
        const data = await models.Tasklist.findAll({
            where: {
                userId: user.id
            }
        })
        res.status(200).json({
            data
        })
    }
    catch (error) {
        res.status(400).json({
            status: false,
            error
        })
    }
}
module.exports = getActivity;