const express = require('express')
const router = express.Router()
const {newSubmission, getSubmissions} = require('../controllers/submissions')



router.post('/user/newsubmission', newSubmission)
router.get('/user/getSubmissions',getSubmissions)


module.exports = router;