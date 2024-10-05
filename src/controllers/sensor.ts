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
        const results = await Sensor.findAll({
            group: ['status'],
            attributes: [
                'status',
                 [sequelize.fn('COUNT', 'status'), 'cantidad'],
                 [sequelize.col('statustype.color'), 'color']
                ],
            include: [
                {
                    model: StatusTypes,  // The model for the 'statustype' table
                    attributes: [],
                }
            ],

            
            
        });

        const sensorStats: any[]=[];

        results.forEach(row => {
            
            const status = row.getDataValue('status');
            const count = row.getDataValue('cantidad');
            const color = row.getDataValue('color');

            sensorStats.push({
                status,
                count,
                color
            });
        });

        res.json(sensorStats);
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
                [sequelize.col('statustype.color'), 'color']

            ],
            include:[
                {
                    model: StatusTypes,
                    attributes: ['color'],
                }
            ],
            group: ['type', 'status', 'statustype.color'],
        });

        
        const sensorCounts: any[]=[];

        results.forEach(row => {
            const type = row.getDataValue('type');
            const status = row.getDataValue('status');
            const count = row.getDataValue('count');
            const color = row.getDataValue('color');

            sensorCounts.push({
                type,
                status,
                count,
                color
            });
            //let existingType = sensorCounts.find(item => item.type === type);

           // if (!existingType) {
           //     // Si no existe, crear un nuevo objeto para el tipo
           //     existingType = { type };
           //     sensorCounts.push(existingType);
           // }
        //
           // // Asignar el conteo al estado en el objeto correspondiente
           // existingType[status] = count;
        });
        console.log(JSON.stringify(sensorCounts, null, 2));
        res.json(sensorCounts);
        return sensorCounts;
    } catch (error) {
        console.error('Error fetching sensor counts:', error);
        throw error; 
    }
}

export const getSensorCountsFinal = async (req: Request, res: Response) => {
    try {
        const results = await Sensor.findAll({
            attributes: [
                'type',
                'status',
                [sequelize.fn('COUNT', sequelize.col('status')), 'count'],
            ],
            group: ['type', 'status'],
        });

        const sensorCounts: SensorStatusCount[] = [];

        results.forEach(row => {
            const type = row.getDataValue('type');
            const status = row.getDataValue('status');
            const count = row.getDataValue('count');

            // Find the object in the array with the matching type
            let sensor = sensorCounts.find(s => s.type === type);

            // If no object with this type exists, create a new one
            if (!sensor) {
                sensor = { type };
                sensorCounts.push(sensor);
            }

            // Add the status and count to the sensor object
            sensor[status] = count;
        });

        console.log(JSON.stringify(sensorCounts, null, 2));
        res.json(sensorCounts);
        return sensorCounts;
    } catch (error) {
        console.error('Error fetching sensor counts:', error);
        throw error;
    }
};


export const postSensor = async (req: Request, res: Response) => {

    const { type, facilityName, status } = req.body;

    try{

        await Sensor.create({
            type: type,
            facilityName: facilityName,
            status: status
        })
    
        res.status(201).json({
            message: `El sensor de tipo: ${type}, estado: ${status} y perteneciente a la planta ${facilityName} fue registrado con exito.`,
            
        })

    } catch (error) {
        res.status(400).json({
            msg: 'Ocurrio un error!',
            error
        })
}
};

export const putSensor = async (req: Request, res: Response) => {
    const sensorId = req.params.id;
    const { type, facilityName, status } = req.body;
    try{
        const sensor = await Sensor.findByPk(sensorId);

        if(!sensor) {
            return res.status(404).json({ message: 'Sensor no encontrado. Revisa el parametro ingresado' });
        }
        await sensor.update({ type, facilityName, status }); 
         return res.json(sensor);
    }
    catch (error){
        return res.status(500).json({ message: 'Error actualizando sensor', error });
    }
}

export const deleteSensor = async (req: Request, res: Response) =>{
    const sensorId = req.params.id;
    
    try{
        const sensor = await Sensor.findByPk(sensorId);

        if(!sensor) {
            return res.status(404).json({ message: 'Sensor no encontrado. Revisa el parametro ingresado' });
        }
        await sensor.destroy(); 
         return res.status(204).send();
    }
    catch (error){
        return res.status(500).json({ message: 'Error borrando sensor', error });
    }
}