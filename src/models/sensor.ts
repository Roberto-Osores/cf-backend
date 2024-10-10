import { DataTypes, STRING } from "sequelize"
import sequelize from "../db/connection"
import { Facility } from "./facility";
import { Status } from "./sensor-status";

export const Sensor = sequelize.define('sensor', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    type:{
        type: STRING,
        allowNull: true
    },

})

