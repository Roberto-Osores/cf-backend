"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Status = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const sensor_1 = require("./sensor");
exports.Status = connection_1.default.define('status', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    color: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: "Color default",
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: 'Add a description to this sensor status...'
    }
}, {
    timestamps: false,
});
exports.Status.hasMany(sensor_1.Sensor);
sensor_1.Sensor.belongsTo(exports.Status);
