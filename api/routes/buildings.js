import express from "express"
import {createBuiding,getBuildings,getSingleBuilding} from '../controllers/buildings.js'

const router = express.Router()


router.post('/create', createBuiding)
router.get('/', getBuildings)
router.get('/:id',getSingleBuilding)
export default router
