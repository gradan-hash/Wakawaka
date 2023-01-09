import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  firstname:{
    type: String,
    required: true,
    
  },
  surname:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  countrycode:{
    type: String,
    required: true,
  },
  telnum:{
    type:String,
    required:true

  },
  img:{
    type:String

  },
  password: {
    type: String,
    required: true

  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  userType:{
    type:String,
    default:"tenant"
  },


}, {timestamps: true})


export default mongoose.model("User" ,userSchema)