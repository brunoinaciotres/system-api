import express from "express";
import PlanetController from "../controllers/PlanetController.js"
import OrderController from "../controllers/OrderController.js";

const router = express.Router()

router.post('/planets', PlanetController.save)

router.post('/insert', OrderController.insert)
router.get('/getAll', OrderController.getAll)
router.get('/getOrdersOfDay', OrderController.getOrdersOfDay)

export default router

