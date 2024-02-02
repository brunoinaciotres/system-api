import express from "express";
import OrderController from "../controllers/OrderController.js";

const router = express.Router()

router.post('/insert', OrderController.insert)
router.get('/getAll', OrderController.getAll)
router.get('/getOrdersOfDay', OrderController.getOrdersOfDay)

export default router

