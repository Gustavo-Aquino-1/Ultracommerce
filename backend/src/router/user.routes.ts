import { Router } from "express";
import UserController from "../controllers/user.controller";

const control = new UserController()

const router = Router()

router.post('/login', control.login.bind(control))
router.post('/user', control.create.bind(control))

export default router