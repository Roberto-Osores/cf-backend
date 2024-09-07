import { Request, Response } from 'express';
import { Facility } from '../models/facility';
import { Sensor } from '../models/sensor';


export const sensorSummary = async (req: Request, res: Response) =>{

    const statusOk = await Sensor.findAll({ where: {status : 'OK'}});
    const statusMedium = await Sensor.findAll({ where: {status : 'MEDIUM'}});
    const statusCritical = await Sensor.findAll({ where: {status : 'CRITICAL'}});
    const statusDisabled = await Sensor.findAll({ where: {status : 'DISABLED'}});

    try{
        res.status(200).json({
            Total: `${statusOk.length + statusMedium.length + statusCritical.length + statusDisabled.length}`,
            OK: `${statusOk.length}`,
            Medium: `${statusMedium.length}`,
            Critical: `${statusCritical.length}`,
            Disabled: `${statusDisabled.length}`

        })
    }

    catch (error){
        res.status(401).json({
            msg: 'Unauthorized'
        });

    }
};

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




    