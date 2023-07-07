const express = require('express')
const router = express.Router()

const { getDashboard, getAnnouncements, getCources, getAssignments } = require('../controllers/dashboardController')
const {requireAuth} = require('../middleware/requireAuth')


// user Route [PROTECTED]
router.get('/getdata', requireAuth, getDashboard)
router.get('/getannouncements', requireAuth, getAnnouncements)
router.get('/getcources', requireAuth, getCources)
router.get('/getassignments', getAssignments)


module.exports =  router;   