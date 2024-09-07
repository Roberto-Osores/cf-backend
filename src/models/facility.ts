import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
import { Sensor } from "./sensor";

export const Facility = sequelize.define('facility', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name:{
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    pais:{
        type: DataTypes.STRING,
        allowNull: false
    }
})

Facility.hasMany(Sensor);