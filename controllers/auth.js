const AdminUser = require('../models/adminUser')
const User = require('../models/user')
var jwt = require("jsonwebtoken");



exports.auth =(req,res,next)=>{
   const authHeader = req.headers.authorization;
   if(authHeader){
       const token = authHeader.split(' ')[1]

       jwt.verify(token, process.env.SECRET , (err,user)=>{
           if(err){
               return res.sendStatus(403)
           }
           req.user = user;
           next()
       })
   }else{
       res.sendStatus(401);
   }
}

exports.getUsers = (req,res)=>{
    User.find().exec((err,users)=>{
        if(err){
            return res.status(401).json({
                status:'fail',
                err:err
            })
        }
        res.json(users)
    })
}

exports.adminRegister = (req, res) => {
    const user = new AdminUser(req.body)
    user.save((err, adminUser) => {
        if (err) {
            return res.status(400).json({
                status: 'failed',
                response: `${err.keyValue['emailId'] || err.keyValue['phoneNo']}` + ` is already exist.`
            })
        }

        adminUser.password = undefined;
        adminUser.__v=undefined;
        res.json({
            status: 'success',
            response: adminUser
        })
    })
}

exports.userRegistration = (req, res) => {
    const user = new User(req.body)
    user.save((err, user) => {
        if (err) {
            return res.status(401).json({
                status: 'failed',
                error:err.message,
                // response: `${err.keyValue['emailId'] || err.keyValue['phoneNo']}` + ` is already exist.`
            })
        }

        user.password = undefined;
        user.__v=undefined;
        res.json({
            status: 'success',
            response: user
        })
    })
}

exports.adminSignIn =(req,res) =>{
    const { emailId, password } = req.body;
    AdminUser.findOne({ emailId }, (err, adminuser) => {
        if (err || !adminuser) {
            return res.json({
                error: 'User not found'
            })
        }

        if(adminuser.password != password){
            return res.json({
                error:'Invalid password'
            })
        }
        const token = jwt.sign({ _id: adminuser._id }, process.env.SECRET)
        res.cookie("token", token, { expire: new Date() + 9 })
        const {  emailId, phoneNo } = adminuser
        res.json({
            status: 'success',
            response: { emailId, phoneNo, token }
        })
    })
}

exports.userSignIn =(req,res) =>{
    const { emailId, password } = req.body;
    User.findOne({ emailId }, (err, user) => {
        if (err || !user) {
            return res.json({
                error: 'User not found'
            })
        }
        if(user.password != password){
            return res.json({
                error:'Invalid password'
            })
        }
        const token = jwt.sign({ _id: user._id }, process.env.SECRET)
        res.cookie("token", token, { expire: new Date() + 9 })
        const date = new Date() + 9
        const {  emailId, phoneNo, _id } = user;
        res.json({
            status: 'success',
            response: { emailId, phoneNo, token, _id }
        })
    })
}