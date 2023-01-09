import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from "cors"
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import buildingRoute from './routes/buildings.js'



const app = express()
dotenv.config()

const connect = async ()=>{
  try{
  await mongoose.connect(process.env.MONGO)
    console.log("connected to db")
  }catch(err){
    throw err
  }
}

mongoose.connection.on("connected", ()=>{
  console.log("mongo db connected")
})

mongoose.connection.on("disconnected", ()=>{
  console.log("mongo db disconnected")
})


//middlewares

app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/building", buildingRoute)



//error handling 

app.use((err,req,res,next) => {
 
  const errorStatus = err.status || 500
  const errorMessage = err.message || "something went wrong"

  return res.status(errorStatus).json({
    sucess: false,
    status: errorStatus,
    message : errorMessage,
    stack: err.stack
  })
})

const port = 3001
app.listen(port, ()=>{
  connect()
  console.log(`connected to backend on port ${port}`)

})

