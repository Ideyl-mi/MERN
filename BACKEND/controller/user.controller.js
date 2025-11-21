import { User } from "../schema/user.schema.js"

export const createUserController = async (req,res) => {
    try {
    let test = req.body
   
    const result = await User.create(test)
    res.json({
        message: "User Registration Successfull",
        success: true,
        data: result
    })
    } catch (error) {
       console.log(error) 
    }
}