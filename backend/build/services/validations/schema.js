"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const joi_1 = __importDefault(require("joi"));
const user = joi_1.default.object({
    name: joi_1.default.string().min(5).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required(),
});
const product = joi_1.default.object({
    name: joi_1.default.string().min(5).required(),
    price: joi_1.default.number().min(1).required(),
    description: joi_1.default.string().min(5).required(),
    brand: joi_1.default.string().min(1).required(),
    img: joi_1.default.string().min(5).required(),
});
const products = joi_1.default.object({
    productId: joi_1.default.number().min(1).required(),
    quantity: joi_1.default.number().min(1).required()
});
const cart = joi_1.default.object({
    products: joi_1.default.array().items(products).min(1).required(),
    total: joi_1.default.number().positive().required()
});
module.exports = { user, product, cart };
