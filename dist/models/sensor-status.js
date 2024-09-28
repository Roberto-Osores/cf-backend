"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusTypes = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const sensor_1 = require("./sensor");
exports.StatusTypes = connection_1.default.define('statustypes', {
    statusId: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
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
    tableName: 'statustype'
});
exports.StatusTypes.hasMany(sensor_1.Sensor, {
    foreignKey: {
        name: 'status'
    }
});
sensor_1.Sensor.belongsTo(exports.StatusTypes, {
    foreignKey: {
        name: 'status'
    }
});
