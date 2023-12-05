"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sale_service_1 = __importDefault(require("../services/sale.service"));
class SaleController {
    constructor() {
        this.service = new sale_service_1.default();
    }
    getByClient(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = res.locals.user.id;
                const { status, message } = yield this.service.getByClient(userId);
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = res.locals.user.id;
                const { status, message } = yield this.service.create(userId, req.body);
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
    getProductsBySaleId(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = res.locals.user.id;
                const { id } = req.params;
                const { status, message } = yield this.service.getProductsBySaleId(userId, +id);
                res.status(status).json(message);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.default = SaleController;
