"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
class Product extends sequelize_1.Model {
}
Product.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_2.default.INTEGER
    },
    name: {
        type: sequelize_2.default.STRING
    },
    price: {
        type: sequelize_2.default.FLOAT
    },
    description: {
        type: sequelize_2.default.STRING(3000)
    },
    brand: {
        type: sequelize_2.default.STRING
    },
    img: {
        type: sequelize_2.default.STRING(3500)
    },
}, {
    sequelize: _1.default,
    timestamps: false,
    tableName: 'product'
});
exports.default = Product;
