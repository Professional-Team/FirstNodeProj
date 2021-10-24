const InterviewRequest = require('../models/interviewRequest')

exports.createInterview = (req, res) => {
    const interviewrequest = new InterviewRequest(req.body)
    interviewrequest.save((err,result)=>{
        if(err){
            return res.status(401).json({
                status:'Fail',
                res:err.errors
            })
        }
        res.json({
            status:'success',
            res:result
        })
    })
}

exports.getInterviews =(req,res)=>{
    InterviewRequest.find().exec((err,interviews)=>{
        if(err){
            return res.status(401).json({
                status:'fail',
                res:err
            })
        }
        res.json({
            status:'success',
            res:interviews
        })
    })
}