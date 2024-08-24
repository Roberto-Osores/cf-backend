"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// cf = nombre del schema // usuario de mysql // contraseña de mysql
const sequelize = new sequelize_1.Sequelize('cf', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});
exports.default = sequelize;
