const models = require('../models')
var jwt = require('jsonwebtoken')
var moment=require('moment')
const { Op } = require('sequelize')
const report = async (req, res, next) => {
    try {
        const token = req.headers['access-token']
        const payload = jwt.decode(token)
        const user = await models.User.findOne({
            where: {
                userName: payload.userName
            }
        });
        const data = await models.Tasklist.findAll({
            where: {
                userId:user.id,
                startDate:{
                    [Op.gte]: moment().subtract(7, 'days').toDate()
                }
            }
        })
        console.log(moment().subtract(1,'days').toDate())
        let j=0
        let output=[]
        let diff,dur
        for(j=0;j<7;j++)
        {
            let task=0
            dur=0
            dat=moment().subtract(j,'days').toDate()
            
            for(let i in data)
            {
                if(moment(data[i].startDate).format('L')===moment(dat).format('L') && data[i].endTime!==null)
                {
                    task++
                    diff=moment(data[i].endTime,"HH:mm:ss").diff(moment(data[i].startTime,"HH:mm:ss"))
                    dur=dur+diff
                }

            }
            output.push({
                date:moment(dat).format('L'),
                tasks:task,
                duration:dur
            })
    }
        console.log(output)
    
         if(data)
         {
        res.status(200).json({
            output
        })
    }
    }
    
    catch (error) {
        res.status(400).json({
            status: false,
            error,
        })
    }
}
module.exports = report;