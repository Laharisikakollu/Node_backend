const express = require('express');
const router = express.Router(); // initialize router

const createUser = require('./createUser.js')
const login = require('./getUser.js')
const createActivity= require('./createActivity.js')
const getActivity = require('./getActivity.js')


router.post('/login', login)
router.post('/users', createUser)
router.get('/activity/:userId', getActivity)
router.post('/activity', createActivity)

module.exports = router;
