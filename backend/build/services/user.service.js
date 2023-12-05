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
const User_1 = __importDefault(require("../database/models/User"));
const md5_1 = __importDefault(require("md5"));
const resp_1 = require("../utils/resp");
const jwt_1 = require("../jwt/jwt");
const schema_1 = __importDefault(require("./validations/schema"));
class UserService {
    constructor() {
        this.model = User_1.default;
    }
    login(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.model.findOne({ where: {
                    email: body.email,
                    password: (0, md5_1.default)(body.password)
                } });
            if (!user)
                return (0, resp_1.respM)(404, 'User not found');
            const token = (0, jwt_1.sign)({ id: user.id, name: user.name });
            return (0, resp_1.resp)(200, { id: user.id, email: user.email, name: user.name, token });
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { error } = schema_1.default.user.validate(body);
            if (error)
                return (0, resp_1.respM)(400, error.message);
            const user = yield this.model.findOne({ where: { email: body.email } });
            if (user)
                return (0, resp_1.respM)(409, 'Email in use');
            const newUser = yield this.model.create(Object.assign(Object.assign({}, body), { password: (0, md5_1.default)(body.password) }));
            return (0, resp_1.resp)(201, newUser);
        });
    }
}
exports.default = UserService;
