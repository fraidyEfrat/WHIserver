const db = require('../models/index')
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken')
const User = db.user



const login = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const foundUser = await User.findOne({where:{email:email}})

//|| !foundUser.active
    if (!foundUser ) {
        return res.status(401).json({ message: 'Unauthorized111' })
    }
    
    const match = await bcrypt.compare(password, foundUser.password)
    console.log(match)
    if (!match) return res.status(401).json({ message: 'Unauthorized222' })
    //res.send("Logged In")

    //ניצור אובייקט המכיל את הפרטים ללא הסיסמא
    //const loginInfo = {password, ...foundUser}
    const loginInfo= { iduser:foundUser.iduser, role:foundUser.role,email:foundUser.email }
    console.log(loginInfo)
     //Create the token
    const accessToken = jwt.sign(loginInfo,process.env.ACCESS_TOKEN_SECRET)
    console.log(accessToken)
    //res.setHeader('Authorization', `Bearer ${accessToken}`)
     console.log("role:"+foundUser.role)
    res.json({accessToken:accessToken,user:foundUser})

}


const register = async (req, res) => {
    console.log("11111111111")
    const {iduser,firstName,lastName,email,city,dateOfBirth,address,id,phone,watsup,password,role} = req.body

    if (!password || !role || !email) {// Confirm data
        return res.status(400).json({ message: 'All fields are required' })
    }
    console.log("222222")
    const duplicate = await User.findOne({where:{email:email}})

    if(duplicate){
        return res.status(409).json({message:"Duplicate email"})
    }
    console.log("3333")
    //Hash password
    const hashedPwd = await bcrypt.hash(password, 10)
    console.log("4444")
    const loginObject = {iduser,firstName,lastName,email,city,dateOfBirth,address,id,phone,watsup,password:hashedPwd,role}
    const mylogin = await User.create(loginObject)
    if (mylogin) { // Created 
        return res.status(201).json({ message: `New login ${mylogin.iduser} created` })
    } else {
        return res.status(400).json({ message: 'Invalid user data received' })
    } 

}

module.exports = {login, register}
