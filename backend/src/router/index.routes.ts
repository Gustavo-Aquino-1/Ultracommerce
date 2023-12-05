import { Router } from "express";
import userRouter from "./user.routes";
import productRouter from "./product.routes";
import saleRouter from "./sale.routes"

const router = Router()
router.use(userRouter)
router.use(productRouter)
router.use(saleRouter)

export default router