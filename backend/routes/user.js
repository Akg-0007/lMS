const express = require('express')
const router = express.Router()

const { loginUser, forgotPassword, verifyUser, resetPassword } = require('../controllers/userController')
const {requireAuth} = require('../middleware/requireAuth')

// user Route 
router.post('/login', loginUser)
// router.post('/login/forget', forgotPassword)
// router.post('/forgotpassword/verify', verifyEmail)
// router.post('/forgotpassword/reset', resetPassword)
router.post('/login/forget', forgotPassword)
// router.post('/login', loginUser)


// user Route [PROTECTED]
router.post('/forgotpassword/verify', requireAuth, verifyUser)
router.patch('/forgotpassword/reset', requireAuth, resetPassword)


module.exports =  router;   