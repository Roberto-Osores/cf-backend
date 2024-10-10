import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
import { Sensor } from "./sensor";


export const Status = sequelize.define ('status',{

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name:{
        type: DataTypes.STRING,
        unique: true
    },
    color:{
        type: DataTypes.STRING,
        defaultValue: "Color default",
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        defaultValue: 'Add a description to this sensor status...'
    }
},
{
    timestamps: false,
    
}
)

Status.hasMany(Sensor);

Sensor.belongsTo(Status);