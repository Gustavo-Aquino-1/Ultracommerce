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
const Sale_1 = __importDefault(require("../database/models/Sale"));
const resp_1 = require("../utils/resp");
const Product_1 = __importDefault(require("../database/models/Product"));
const SaleProduct_1 = __importDefault(require("../database/models/SaleProduct"));
const schema_1 = __importDefault(require("./validations/schema"));
const Avaliation_1 = __importDefault(require("../database/models/Avaliation"));
class SaleService {
    constructor() {
        this.model = Sale_1.default;
    }
    getByClient(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sales = yield this.model.findAll({
                where: { userId }
            });
            return (0, resp_1.resp)(200, sales);
        });
    }
    create(userId, cart) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = schema_1.default.cart.validate(cart);
            if (error)
                return (0, resp_1.respM)(400, error.message);
            for (let p of cart.products) {
                const pExists = yield Product_1.default.findByPk(p.productId);
                if (!pExists)
                    return (0, resp_1.respM)(404, `Product "${p.productId}" not found`);
            }
            const sale = yield this.model.create({ userId, total: cart.total });
            yield Promise.all(cart.products.map((e) => __awaiter(this, void 0, void 0, function* () {
                return yield SaleProduct_1.default.create({
                    saleId: sale.id,
                    productId: e.productId,
                    quantity: e.quantity
                });
            })));
            return (0, resp_1.resp)(201, sale);
        });
    }
    getProductsBySaleId(userId, saleId) {
        return __awaiter(this, void 0, void 0, function* () {
            const sale = yield this.model.findOne({ where: { id: saleId } });
            if ((sale === null || sale === void 0 ? void 0 : sale.userId) === userId) {
                const productsIds = yield SaleProduct_1.default.findAll({ where: { saleId }, attributes: ['productId'] });
                const products = [];
                for (let p of productsIds) {
                    const product = yield Product_1.default.findByPk(p.productId);
                    const isAvaliated = yield Avaliation_1.default.findOne({ where: {
                            userId,
                            productId: p.productId
                        } });
                    if (!isAvaliated) {
                        products.push(product);
                    }
                }
                return (0, resp_1.resp)(200, products);
            }
            return (0, resp_1.respM)(401, 'Unauthorized');
        });
    }
}
exports.default = SaleService;
