import { DataTypes } from "sequelize"
import sequelize from "../db/connection"

export const Sensor = sequelize.define('sensor', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    classification:{
        type: DataTypes.ENUM('Temperatura', 'Energia', 'Presion', 'Tension', 'Viento', 'Monoxido de Carbono', 'Niveles', 'Otros gases'),
        allowNull: true
    },

    status:{
        type: DataTypes.ENUM ('OK', 'MEDIUM', 'CRITICAL', 'DISABLED'),
        allowNull: false
    }

})