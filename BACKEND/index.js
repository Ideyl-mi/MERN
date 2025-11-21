import express from "express" 
import { connectDatabase} from "./config/connectMongo.js"
import {userRouter} from "./routes/user.route.js"
const app = express()
app.use(express.json())

const PORT = 4000

connectDatabase() 

app.use("/user", userRouter )

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`) 
})
