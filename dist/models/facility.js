"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Facility = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const sensor_1 = require("./sensor");
exports.Facility = connection_1.default.define('facility', {
    name: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.Facility.hasMany(sensor_1.Sensor, {
    foreignKey: {
        name: 'facilityName',
    }
});
sensor_1.Sensor.belongsTo(exports.Facility, {
    foreignKey: {
        name: 'facilityName',
    }
});
