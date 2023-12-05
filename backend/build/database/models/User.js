"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const sequelize_2 = __importDefault(require("sequelize"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_2.default.INTEGER
    },
    name: {
        type: sequelize_2.default.STRING
    },
    email: {
        type: sequelize_2.default.STRING,
        unique: true
    },
    password: {
        type: sequelize_2.default.STRING
    },
}, {
    sequelize: _1.default,
    timestamps: false,
    tableName: 'user'
});
exports.default = User;
