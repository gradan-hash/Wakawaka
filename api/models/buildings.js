import mongoose from 'mongoose';


const buildingSchema = new mongoose.Schema({
  apartmentName:{
    type: String,
    required: true,
    
  },
  price:{
    type: Number,
    required: true,
  },
  
  telNum:{
    type:String,
    required:true

  },
  img:{
    type:String,
   

  },
  description: {
    type: String,
    required: true

  },
 
  location:{
    type:String,
    required:true
  },


}, {timestamps: true})


export default mongoose.model("Building" ,buildingSchema)