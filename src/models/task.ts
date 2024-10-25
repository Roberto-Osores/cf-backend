import { DataTypes} from "sequelize"
import sequelize from "../db/connection"

export const Task = sequelize.define('task', {
    
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    titulo:{
        type: DataTypes.STRING,
        allowNull: false
    },

    descripcion:{
        type: DataTypes.STRING,
        defaultValue: "No olvides agregar una descripción a tu tarea"
    },

    icono:{
        type: DataTypes.STRING,
        allowNull:false
    },

    estado:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

})