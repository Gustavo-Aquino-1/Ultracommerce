"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.sign = void 0;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.JWT_SECRET;
const sign = (payload, expiresIn = '5d') => {
    const options = {
        algorithm: 'HS256',
        expiresIn
    };
    return jsonwebtoken_1.default.sign(payload, secret, options);
};
exports.sign = sign;
const verifyToken = (req, res, next) => {
    try {
        const token = req.header('Authorization') || "";
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        res.locals.user = decoded;
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.verifyToken = verifyToken;
