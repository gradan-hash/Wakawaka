import express from "express";
import { register, login,verifyGoogleToken} from "../controllers/auth.js";


const router = express.Router()

router.post("/register", register)

router.post("/login", login)
router.post("/verifyGoogleToken", verifyGoogleToken)


export default router

