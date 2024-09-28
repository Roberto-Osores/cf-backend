import { DataTypes } from "sequelize"
import sequelize from "../db/connection"
import { Sensor } from "./sensor";


export const StatusTypes = sequelize.define ('statustypes',{

    statusId:{
        type: DataTypes.STRING,
        primaryKey: true,
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
    tableName: 'statustype'
    
}
)

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