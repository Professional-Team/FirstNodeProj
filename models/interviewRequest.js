const mongoose = require('mongoose')

const interviewRequestSchema = new mongoose.Schema({
    candidateName: {
        type: String,
        trim: true,
        required: true
    },
    email_id: {
        type: String,
        trim: true,
        required: true
    },
    vendorName: {
        type: String,
        trim: true,
        required: true
    },
    clientName: {
        type: String,
        trim: true,
        required: true
    },
    clientsidePortalInfo: {
        type: String,
        trim: true,
        required: true
    },
    interviewDate: {
        type: Date,
        required: true
    },
    timeZones: {
        type: Date,
        required: true
    },
    roundsCount: {
        type: String,
        trim:true,
        required:true
    },
    comments: {
        type: String,
        trim:true,
        required: true
    },
    userId:{
        type: String,
        trim:true,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('InterviewRequest', interviewRequestSchema)