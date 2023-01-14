import express from "express";


import {savemessages} from "../controllers/requests.js"

const router = express.Router();

router.post("/create", savemessages)
export default router;