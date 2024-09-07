"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Sensor = connection_1.default.define('sensor', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    classification: {
        type: sequelize_1.DataTypes.ENUM('Temperatura', 'Energia', 'Presion', 'Tension', 'Viento', 'Monoxido de Carbono', 'Niveles', 'Otros gases'),
        allowNull: true
    },
    status: {
        type: sequelize_1.DataTypes.ENUM('OK', 'MEDIUM', 'CRITICAL', 'DISABLED'),
        allowNull: false
    }
});
