const Submission = require('../models/submissions')

exports.newSubmission = (req,res)=>{
    const submission = new Submission(req.body)
    submission.save((err, submission) => {
        if (err) {
            return res.status(400).json({
                status: 'failed',
                response: err
            })
        }

        res.json({
            status: 'success',
            response: submission
        })
    })
}

exports.getSubmissions = (req,res)=>{
    Submission.find().exec((err,submissions)=>{
        // ** get query by user
        if(err){
            return res.status(401).json({
                status:'fail',
                err:err
            })
        }
        res.json({
            status:'success',
            res:submissions
        })
    })
}

