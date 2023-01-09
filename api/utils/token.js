import jwt from 'jsonwebtoken'
// console.log(process.env.JWT_SECRET)
export const generateToken = (user)=>{
   return jwt.sign({id:user._id,email:user.email},process.env.JWT_SECRET ,{expiresIn:"24h"})
}