const mongoose = require('mongoose')

const adminUserSchema = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
        required:true,
        minlength:5,
    },
    lastName:{
        type:String,
        trim:true,
        required:true,
        minlength:5,
    },
    emailId:{
        type:String,
        trim:true,
        required:true,
        minlength:5,
        unique:true
    },
    userName:{
        type:String,
        trim:true,
        required:true,
        minlength:5,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:5,
    },
    phoneNo:{
        type:String,
        trim:true,
        required:true,
        unique:true
    }
},{timestamps:true})


module.exports = mongoose.model('AdminUser',adminUserSchema)