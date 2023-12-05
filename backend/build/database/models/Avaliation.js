"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
class Avaliation extends sequelize_1.Model {
}
Avaliation.init({
    productId: {
        type: sequelize_2.default.INTEGER,
        references: {
            model: "product",
            key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: sequelize_2.default.INTEGER,
        references: {
            model: "user",
            key: "id"
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        allowNull: false
    },
    rate: {
        type: sequelize_2.default.INTEGER
    },
    description: {
        type: sequelize_2.default.STRING(3000)
    },
}, {
    sequelize: _1.default,
    timestamps: false,
    tableName: 'avaliation',
    underscored: true
});
exports.default = Avaliation;
