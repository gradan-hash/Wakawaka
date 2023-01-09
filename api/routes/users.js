import express from "express"

import {CreateUser,updateusers,getAllusers,getusers,deleteusers} from "../controllers/users.js"

import { verifyAdmin, verifyToken, verifyUser } from "../utils/verify.js";

const router =express.Router()

// router.post("/", CreateUser)
//update
router.put("/:id",verifyToken,verifyUser, updateusers)
//delete
router.delete("/:id", verifyToken,verifyUser, deleteusers);
//get
router.get("/:id",verifyToken,verifyUser, getusers)
//getall
router.get("/",verifyToken,verifyAdmin,getAllusers)

export default router