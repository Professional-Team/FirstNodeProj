const mongoose = require('mongoose')

const submissionSchema = new mongoose.Schema({
    vendorName:{
        type:String,
        trim:true,
        required:true
    },
    vendorContact:{
        type:String,
        trim:true,
        required:true
    },
    vendorCompany:{
        type:String,
        trim:true,
        required:true
    },
    vendorEmail:{
        type:String,
        trim:true,
        required:true
    },
    jobTitle:{
        type:String,
        trim:true,
        required:true
    },
    clientName:{
        type:String,
        trim:true,
        required:true
    },
    location:{
        type:String,
        trim:true,
        required:true
    },
    submissionDate:{
        type:Date,
        required:true
    },
    userId:{
        type:String,
        trim:true,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model('Submission',submissionSchema)