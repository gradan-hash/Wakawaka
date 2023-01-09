import users from "../models/users.js";

//crud operations

//create users

export const CreateUser = async(req,res,next)=>{
  const newUsers = new users(req.body)
  try{
      const savedUsers = await newUsers.save()
      res.status(200).json(savedUsers)

  }catch(err){
    next(err)

  }}
  
  //update

  export const updateusers = async(req,res,next)=>{
    try{
      const updatedusers= await users.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
      res.status(200).json(updatedusers)
  }catch(err){
   next(err)
  } 
  }

//delete

export const deleteusers = async(req,res,next)=>{
  try{
    await users.findByIdAndDelete(req.params.id)
    res.status(200).json("users has been deleted")
}catch(err){
  next(err)
} }

//get
export const getusers = async(req,res,next)=>{
  try{
    const getusers =  await users.findById(req.params.id)
    res.status(200).json(getusers)
}catch(err){
  next(err)
} 
}
//getall
export const getAllusers = async(req,res,next)=>{
  try{
    const getAllusers =  await users.find()
    res.status(200).json(getAllusers)
}catch(err){
  next(err)
}  
}

