const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
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
    },
    technologies:{
        type: String, //array or string,
        trim:true,
        required:true
    }
},{timestamps:true})


module.exports = mongoose.model('User',userSchema)