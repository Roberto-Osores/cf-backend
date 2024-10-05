import { Request, Response } from 'express';
import { Sensor } from '../models/sensor';
import { StatusTypes } from '../models/sensor-status';
import sequelize from '../db/connection';


export const postSensorStatus = async (req: Request, res: Response) => {
    
    const { statusId, color, description } = req.body;

    try{

        await StatusTypes.create({
            statusId: statusId,
            color: color,
            description: description
        })
    
        res.status(201).json({
            message: `El Estado de Sensor: ${statusId} y asociado al color: ${color} fue registrado con exito.`,
            
        })
    }
    catch(error){
        res.status(400).json({
            message: 'Ocurrio un error! Revisa los parametros ingresados',
            error
    })
}
};

export const putSensorStatus = async (req: Request, res: Response) => {
    const statusId = req.params.statusId;
    const { color, description } = req.body;
    
    try{
        const status = await StatusTypes.findByPk(statusId);
        console.log (status);
        if(!status) {
            return res.status(404).json({ message: 'Estado de Sensor no encontrado. Revisa el parametro ingresado' });
        }
        await status.update({ color, description }); 
         return res.json(status);
    }
    catch(error){
        return res.status(500).json({ message: 'Error actualizando estado de sensor', error });
    }
};

export const deleteSensorStatus = async (req: Request, res: Response) => {
    const statusId = req.params.statusId;
    
    try{
        const status = await StatusTypes.findByPk(statusId);

        if(!status) {
            return res.status(404).json({ message: 'Estado de sensor no encontrado. Revisa el parametro ingresado' });
        }
        await status.destroy(); 
         return res.status(204).send();
    }
    catch (error){
        return res.status(500).json({ message: 'Error borrando estado de sensor', error });
    }
};