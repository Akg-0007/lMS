const express = require('express')

const router = express.Router()
router.use(express.json());

const { createAssignment, getAssignmentsSubmissionsById, findAllAssignment, findAssigmnetById, findAllSumbission, findAssigmnetSubById, updateFile } = require('../controllers/assessmentController')
const {requireAuth} = require('../middleware/requireAuth')


// user Route [PROTECTED]
router.get('/assignment-submissions/:assignmentId',  getAssignmentsSubmissionsById)
router.get('/assignment/all', findAllAssignment)
router.get('/assignment/all/:id',findAssigmnetById)
router.get('/assignment/submit/:id',findAssigmnetSubById)
router.get('/assignment/submit',findAllSumbission)

router.post('/assignment/create', requireAuth, createAssignment)
router.put('/assignment/update/:id',  updateFile)


module.exports =router;