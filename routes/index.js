const express = require('express');
const router = express.Router(); // initialize router

const createUser = require('../controllers/createUser.js')
const login = require('../controllers/getUser.js')
const createActivity= require('../controllers/createActivity.js')
const getActivity = require('../controllers/getActivity.js')
const getActivitiesByDate = require('../controllers/activityDate.js')
const updatePassword = require('../controllers/updatePassword.js');
const report = require('../controllers/report.js');


router.post('/login', login)
router.post('/users', createUser)
router.get('/useractivity', getActivity)
router.post('/activity', createActivity)
router.get('/activities/:startDate' , getActivitiesByDate)
router.post('/updatePassword' , updatePassword)
router.get('/report',report);

module.exports = router;


// {
// 	"activity":"Read",
// 	"startDate":"3-18-2020",
// 	"startTime":"13:00",
// 	"endTime":"15:30",
// 	"userId":3
	
// }