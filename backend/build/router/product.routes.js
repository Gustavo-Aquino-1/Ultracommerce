"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = __importDefault(require("../controllers/product.controller"));
const jwt_1 = require("../jwt/jwt");
const control = new product_controller_1.default();
const router = (0, express_1.Router)();
router.get('/product', control.get.bind(control));
router.get('/product/:id', control.getWithAvaliations.bind(control));
router.post('/product', control.create.bind(control));
router.post('/comment/:id', jwt_1.verifyToken, control.comment.bind(control));
exports.default = router;
