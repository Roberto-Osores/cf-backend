import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
import { Sensor } from "./sensor";

export const Facility = sequelize.define('facility', {

    name:{
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false
    },

    location:{
        type: DataTypes.STRING,
        allowNull: false
    }
})


Facility.hasMany(Sensor, {
    foreignKey:{
        name: 'facilityName',
    }
});

Sensor.belongsTo(Facility, {
    foreignKey:{
        name: 'facilityName',
    }
});