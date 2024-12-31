const { userModel } = require("../model/userschema")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.userLogin = async (req,res) =>{
    try {
        const {email, password} = req.body

        if(!email || !password){
            return res.status(401).json({
                message: "invalid data",
                success: false
            })
        }

        let user = await userModel.findOne({email})
        if(!user){
            return res.status(401).json({
                message: "invalid email or password",
                success: false
            })
        }
        //! user.password in above if user will be true then it has the data so we can say user.password

        let isMatch = await bcryptjs.compare(password, user.password)
        if(!isMatch){
            return res.status(401).json({
                message: "invalid email or password",
                success: false
            })
        }
        //? for token
        payload = {
            id: user._id,
            name: user.name,
            email: user.email
        }

        const secretKey = "cbnaiefygeaubviapiaeufyhiucv"
        const token = await jwt.sign(payload, secretKey, {expiresIn: "1d"})
        
        return res.status(200).cookie("token", token, {httpOnly: true}).json({
            message: `welcome back ${user.name}`,
            success: true,
            user
        })

    } catch (error) {
        console.log(error)
    }
}

exports.userLogout = async (req,res) =>{
    return res.status(200).cookie("token", "", {expiresIn: new Date(Date.now()), httpOnly: true}).json({
        message: "user logged out successfully ",
        success: true
    })
}

exports.postRegister = async (req,res) =>{
    try {
        
        const {name, email, password} = req.body

        if(!name || !email || !password){
            return res.status(401).json({
                message: "invalid data",
                success: false
            })
        }
        
        let userEmail = await userModel.findOne({email})
        if(userEmail){
            return res.status(401).json({
                message: "email is already registered",
                success: false
            })
        }

        const hashedPass = await bcryptjs.hash(password,16)
        
        userModel.create({
            name,
            email,
            password: hashedPass
        })

        return res.status(201).json({
            message: "account created successfully",
            success: true
        })
    } catch (error) {
        console.log(error)
    }
}