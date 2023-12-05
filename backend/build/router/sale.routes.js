"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sale_controller_1 = __importDefault(require("../controllers/sale.controller"));
const jwt_1 = require("../jwt/jwt");
const control = new sale_controller_1.default();
const router = (0, express_1.Router)();
router.get('/sale', jwt_1.verifyToken, control.getByClient.bind(control));
router.post('/sale', jwt_1.verifyToken, control.create.bind(control));
router.get('/sale/:id', jwt_1.verifyToken, control.getProductsBySaleId.bind(control));
exports.default = router;
