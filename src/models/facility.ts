import { DataTypes } from "sequelize"
import sequelize from "../db/connection"

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