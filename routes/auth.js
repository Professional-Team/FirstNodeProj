const express = require('express')
const router = express.Router()
const {adminRegister, adminSignIn, userRegistration, userSignIn, getUsers, auth} = require('../controllers/auth')



router.post('/adminuser/register', adminRegister)
router.post('/adminuser/signin', adminSignIn)
router.post('/user/register', userRegistration)
router.post('/user/signin', userSignIn)

// router.get('/user/getall', auth ,getUsers)
router.get('/user/getall', getUsers)


module.exports = router;