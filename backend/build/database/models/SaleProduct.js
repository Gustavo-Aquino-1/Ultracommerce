"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
class SaleProduct extends sequelize_1.Model {
}
SaleProduct.init({
    saleId: {
        type: sequelize_2.default.INTEGER,
        references: {
            model: 'sale',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true
    },
    productId: {
        type: sequelize_2.default.INTEGER,
        references: {
            model: 'product',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true
    },
    quantity: {
        type: sequelize_2.default.INTEGER
    },
}, {
    sequelize: _1.default,
    timestamps: false,
    tableName: 'sale_product',
    underscored: true
});
exports.default = SaleProduct;
