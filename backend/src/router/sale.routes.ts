import { Router } from "express";
import SaleController from "../controllers/sale.controller";
import { verifyToken } from "../jwt/jwt";

const control = new SaleController()

const router = Router()

router.get('/sale', verifyToken, control.getByClient.bind(control))
router.post('/sale', verifyToken, control.create.bind(control))
router.get('/sale/:id', verifyToken, control.getProductsBySaleId.bind(control))

export default router