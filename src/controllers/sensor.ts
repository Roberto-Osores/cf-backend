import { Request, Response } from 'express';
import { Facility } from '../models/facility';
import { Sensor } from '../models/sensor';
import { StatusTypes } from '../models/sensor-status';
import sequelize from '../db/connection';



export const sensorSummary = async (req: Request, res: Response) =>{

    try{
        const statusById = await StatusTypes.findAll({
            attributes: ['statusId'],
            raw: true
        
        });
        console.log(statusById);
        const variable = statusById.map(StatusTypes=>StatusTypes.dataValues);
        const variable2 = variable.map(statusId=>statusId.dataValues);
       // console.log(variable);
       // return variable;
        //const  statuses = statusById.map(StatusTypes => StatusTypes.statusId);

        }
    

    catch (error){
        res.status(401).json({
            msg: 'Unauthorized'
        });

    }}

export const sensorByType = async (req: Request, res: Response) =>{

    const TemperaturaOK = await Sensor.findAll({ where: {status : 'OK', classification : 'Temperatura'}});
    const TemperaturaMedium = await Sensor.findAll({ where: {status : 'MEDIUM', classification : 'Temperatura'}});
    const TemperaturaCritical = await Sensor.findAll({ where: {status : 'CRITICAL', classification : 'Temperatura'}});

    const EnergiaOK = await Sensor.findAll({ where: {status : 'OK', classification : 'Energia'}});
    const EnergiaMedium = await Sensor.findAll({ where: {status : 'MEDIUM', classification : 'Energia'}});
    const EnergiaCritical = await Sensor.findAll({ where: {status : 'CRITICAL', classification : 'Energia'}});

    const PresionOK = await Sensor.findAll({ where: {status : 'OK', classification : 'Presion'}});
    const PresionMedium = await Sensor.findAll({ where: {status : 'MEDIUM', classification : 'Presion'}});
    const PresionCritical = await Sensor.findAll({ where: {status : 'CRITICAL', classification : 'Presion'}});

    const TensionOK = await Sensor.findAll({ where: {status : 'OK', classification : 'Tension'}});
    const TensionMedium = await Sensor.findAll({ where: {status : 'MEDIUM', classification : 'Tension'}});
    const TensionCritical = await Sensor.findAll({ where: {status : 'CRITICAL', classification : 'Tension'}});

    const VientoOK = await Sensor.findAll({ where: {status : 'OK', classification : 'Viento'}});
    const VientoMedium = await Sensor.findAll({ where: {status : 'MEDIUM', classification : 'Viento'}});
    const VientoCritical = await Sensor.findAll({ where: {status : 'CRITICAL', classification : 'Viento'}});

    const MonoxidoOK = await Sensor.findAll({ where: {status : 'OK', classification : 'Monoxido de Carbono'}});
    const MonoxidoMedium = await Sensor.findAll({ where: {status : 'MEDIUM', classification : 'Monoxido de Carbono'}});
    const MonoxidoCritical = await Sensor.findAll({ where: {status : 'CRITICAL', classification : 'Monoxido de Carbono'}});

    const NivelesOK = await Sensor.findAll({ where: {status : 'OK', classification : 'Niveles'}});
    const NivelesMedium = await Sensor.findAll({ where: {status : 'MEDIUM', classification : 'Niveles'}});
    const NivelesCritical = await Sensor.findAll({ where: {status : 'CRITICAL', classification : 'Niveles'}});

    const OtrosGasesOK = await Sensor.findAll({ where: {status : 'OK', classification : 'Otros Gases'}});
    const  OtrosGasesMedium = await Sensor.findAll({ where: {status : 'MEDIUM', classification : 'Otros Gases'}});
    const OtrosGasesCritical = await Sensor.findAll({ where: {status : 'CRITICAL', classification : 'Otros Gases'}});

    try{
        
        res.status(200).json({
            TemperaturaSummary: [`${TemperaturaOK.length}`, `${TemperaturaMedium.length}`, `${TemperaturaCritical.length}`],
            EnergiaSummary: [`${EnergiaOK.length}`, `${EnergiaMedium.length}`, `${EnergiaCritical.length}`],
            PresionSummary: [`${PresionOK.length}`, `${PresionMedium.length}`, `${PresionCritical.length}`],
            TensionSummary: [`${TensionOK.length}`, `${TensionMedium.length}`, `${TensionCritical.length}`],
            VientoSummary: [`${VientoOK.length}`, `${VientoMedium.length}`, `${VientoCritical.length}`],
            MonoxidoSummary: [`${MonoxidoOK.length}`, `${MonoxidoMedium.length}`, `${MonoxidoCritical.length}`],
            NivelesSummary: [`${NivelesOK.length}`, `${NivelesMedium.length}`, `${NivelesCritical.length}`],
            OtrosGasesSummary: [`${OtrosGasesOK.length}`, `${OtrosGasesMedium.length}`, `${OtrosGasesCritical.length}`]
        })
    }
    
    catch(error){
        res.status(400).json({
            msg: 'Un error ocurrio'
        })
    }
};



export const sensorByStatus = async (req: Request, res: Response) =>{

    try{
        const count = await Sensor.findAll({
            group: ['status'],
            attributes: ['status', [sequelize.fn('COUNT', 'status'), 'cantidad']],
            raw: true
        });
        res.json(count);
    }
    catch(error){
        res.status(401).json({
            msg: 'Unauthorized'
        })
    };
}


export const sensorByType2 = async (req: Request, res: Response) =>{

    try{
        const count2 = await Sensor.findAll({
            group: ['type', 'status'],
            attributes:['type', 'status', [sequelize.fn('COUNT', sequelize.col ('id')), 'cantidad']],
            //attributes: ['type', [sequelize.fn('COUNT', sequelize.col('status')), 'cantidad']],
            //order: [[StatusTypes, 'status', 'DESC']],
            order: ['type'],
            raw: true
        });
        console.log (count2);
        res.json(count2);
    }
    catch(error){
        res.status(401).json({
            msg: 'Unauthorized'
        })
    };
}
    
interface SensorStatusCount {
    type?: string;
    [status: string]: number | string | undefined;
}


export async function getSensorCounts(): Promise<SensorStatusCount[]> {
    try {
        
        const results = await Sensor.findAll({
            attributes: [
                'type',
                'status',
                [sequelize.fn('COUNT', sequelize.col('status')), 'count'],
            ],
            group: ['type', 'status'],
        });

        
        const sensorCounts: Record<string, SensorStatusCount> = {};

        results.forEach(row => {
            const type = row.getDataValue('type');
            const status = row.getDataValue('status');
            const count = row.getDataValue('count');

            if (!sensorCounts[type]) {
                sensorCounts[type] = { type }; 
            }

            sensorCounts[type][status] = count; 
        });
        console.log(JSON.stringify(sensorCounts, null, 2));
        Response.json(JSON.stringify(sensorCounts, null, 2));
        return Object.values(sensorCounts);
    } catch (error) {
        console.error('Error fetching sensor counts:', error);
        throw error; 
    }
}

export const getSensorCounts2 = async (req: Request, res: Response) =>{
    try {
        
        const results = await Sensor.findAll({
            attributes: [
                'type',
                'status',
                [sequelize.fn('COUNT', sequelize.col('status')), 'count'],
            ],
            group: ['type', 'status'],
        });

        
        const sensorCounts: Record<string, SensorStatusCount> = {};

        results.forEach(row => {
            const type = row.getDataValue('type');
            const status = row.getDataValue('status');
            const count = row.getDataValue('count');

            if (!sensorCounts[type]) {
                sensorCounts[type] = { type }; 
            }

            sensorCounts[type][status] = count; 
        });
        console.log(JSON.stringify(sensorCounts, null, 2));
        res.json(sensorCounts);
        return Object.values(sensorCounts);
    } catch (error) {
        console.error('Error fetching sensor counts:', error);
        throw error; 
    }
}