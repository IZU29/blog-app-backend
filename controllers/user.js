require('dotenv').config()


const jwt = require('jsonwebtoken')
const User = require('../model/user')
const bcrypt = require('bcryptjs')
const CustomError = require('../Error/CustomError')

const register = async (req ,res , next) => {
    try{
    const {username, email ,password} = req.body
    if(!email || !password ||!username){
        return (next(new CustomError('Fill In all necessary credentials' , 400)))
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password , salt)
    const userinfo = {username , email, password : hashPassword}
    const user = await User.create(userinfo)
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
    res.status(200).json({token , user})
    console.log('Register link was clicked !!!')
    }
    catch(error){
    // console.log(new )
    }
}
// const register = async (req ,res) => {

// }
const login = async (req ,res) => {
    try{
    const {email ,password} = req.body
    const user = await User.findOne({email})
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch){
        res.status(500).json({msg : "Incorrect Password"})
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
    res.status(200).json({ token, user });
    console.log("Login Link was clicked")
}
catch(error){
    res.status(500).json({msg : "Server Error Established !!!"})
}
}

module.exports = {
    register,
    login
}