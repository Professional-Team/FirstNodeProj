const express = require('express')
const router = express.Router()
const {createInterview, getInterviews} = require('../controllers/interviewRequest')



router.post('/user/createinterview', createInterview)
router.get('/user/getinterviews', getInterviews)


module.exports = router;