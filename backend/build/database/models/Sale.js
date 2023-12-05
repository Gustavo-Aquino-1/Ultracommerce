"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
class Sale extends sequelize_1.Model {
}
Sale.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_2.default.INTEGER
    },
    userId: {
        type: sequelize_2.default.NUMBER,
        references: {
            model: 'user',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
    },
    total: {
        type: sequelize_2.default.FLOAT
    },
    saleDate: {
        type: sequelize_2.default.DATE,
        defaultValue: sequelize_2.default.literal('CURRENT_TIMESTAMP')
    },
}, {
    sequelize: _1.default,
    timestamps: false,
    tableName: 'sale',
    underscored: true
});
exports.default = Sale;
