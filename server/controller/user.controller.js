import { User } from "../schema/user.schema.js"
import bcrypt from "bcryptjs"

export const createUserController = async(req,res) => {
    try {
        let data = req.body
        let hashedPassword= await bcrypt.hash(data.password,10)
        data = {
            ...data,
            password: hashedPassword
        }
        const result = await User.create(data)
        res.status(201).json({
            message: "User Registered Successfully",
            result: result
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
        
    }
} 

export const getAllUserController = async(req,res)=>{
    try {
        const result = await User.find({});
        res.status(200).json({
            message:"User fetched Successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message:"User fetched unsuccessfully",
            error: error.message
        })
    }
}

export const getSpecificUserController = async(req,res)=>{
    try {
        let id = req.params.id
        console.log(id)
        const result = await User.findById(id);
        res.status(200).json({
            message:"User fetched Successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message:"User fetched unsuccessfully",
            error: error.message
        })
    }
}

export const updateUserController = async(req,res)=>{
    try {
        let id = req.params.id
        let data = req.body
        const result = await User.findByIdAndUpdate(id, data,{new:true});
        res.status(200).json({
            message:"User updated Successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            error: error.message
        })
    }
}

export const loginUserController = async(req,res) => {
    try {
        
        const isValidEmail = await User.findOne({email : req.body.email})
        if (!isValidEmail){
            res.status(404).json({
                message:"Invalid Credentials"
            })
       }
        const isValidPassword = await bcrypt.compare( req.body.password , isValidEmail.password)
        if (!isValidPassword){
            res.status(404).json({
                message:"Invalid Credentials"
            })
        }
        res.status(200).json({
            message:"Login Successful",
            data: isValidEmail
        })
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            error: error.message
        })
    }
}

export const deleteUserController = async(req,res) =>{
    try {let id = req.params.id
    let data = req.body
    const del = await User.findByIdAndDelete(id, data);
    res.status(200).json({
        message:"User deleted successfully",
        data: del
    })
    } catch (error){
        res.status(500).json({
            message: "Internal Server Error",
            error:error.message
        })
    }   
}
