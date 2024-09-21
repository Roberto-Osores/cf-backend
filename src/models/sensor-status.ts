import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
import { Sensor } from "./sensor";


export const StatusTypes = sequelize.define ('statustypes',{

    statusId:{
        type: DataTypes.STRING,
        primaryKey: true,
    },
    description:{
        type: DataTypes.STRING,
        defaultValue: 'Add a description to this sensor status...'
    }
})

StatusTypes.hasMany(Sensor, {
    foreignKey:{
        name:'status'
    }
});

Sensor.belongsTo(StatusTypes, {
    foreignKey:{
        name:'status'
    }
});