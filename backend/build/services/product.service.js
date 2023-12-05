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
const Product_1 = __importDefault(require("../database/models/Product"));
const resp_1 = require("../utils/resp");
const Avaliation_1 = __importDefault(require("../database/models/Avaliation"));
const schema_1 = __importDefault(require("./validations/schema"));
class ProductService {
    constructor() {
        this.model = Product_1.default;
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, resp_1.resp)(200, yield this.model.findAll());
        });
    }
    getWithAvaliations(productId) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.model.findByPk(productId);
            const avaliations = yield Avaliation_1.default.findAll({
                where: { productId }
            });
            return (0, resp_1.resp)(200, [product, avaliations]);
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = schema_1.default.product.validate(body);
            if (error)
                return (0, resp_1.respM)(400, error.message);
            const newProduct = yield this.model.create(Object.assign({}, body));
            return (0, resp_1.resp)(201, newProduct);
        });
    }
    comment(productId, userId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const avaliation = yield Avaliation_1.default.findOne({ where: { productId, userId } });
            if (avaliation)
                return (0, resp_1.respM)(409, 'You already rate it');
            yield Avaliation_1.default.create(Object.assign(Object.assign({}, body), { userId, productId }));
            return (0, resp_1.respM)(201, 'Commented with sucess');
        });
    }
}
exports.default = ProductService;
