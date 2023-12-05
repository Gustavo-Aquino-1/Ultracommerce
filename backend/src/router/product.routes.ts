import { Router } from "express";
import ProductController from "../controllers/product.controller";
import { verifyToken } from "../jwt/jwt";

const control = new ProductController()

const router = Router()

router.get('/product', control.get.bind(control))
router.get('/product/:id', control.getWithAvaliations.bind(control))
router.post('/product', control.create.bind(control))
router.post('/comment/:id', verifyToken, control.comment.bind(control))

export default router