"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sensorByType = exports.sensorSummary = void 0;
const sensor_1 = require("../models/sensor");
const sensorSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const statusOk = yield sensor_1.Sensor.findAll({ where: { status: 'OK' } });
    const statusMedium = yield sensor_1.Sensor.findAll({ where: { status: 'MEDIUM' } });
    const statusCritical = yield sensor_1.Sensor.findAll({ where: { status: 'CRITICAL' } });
    const statusDisabled = yield sensor_1.Sensor.findAll({ where: { status: 'DISABLED' } });
    try {
        res.status(200).json({
            Total: `${statusOk.length + statusMedium.length + statusCritical.length + statusDisabled.length}`,
            OK: `${statusOk.length}`,
            Medium: `${statusMedium.length}`,
            Critical: `${statusCritical.length}`,
            Disabled: `${statusDisabled.length}`
        });
    }
    catch (error) {
        res.status(401).json({
            msg: 'Unauthorized'
        });
    }
});
exports.sensorSummary = sensorSummary;
const sensorByType = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const TemperaturaOK = yield sensor_1.Sensor.findAll({ where: { status: 'OK', classification: 'Temperatura' } });
    const TemperaturaMedium = yield sensor_1.Sensor.findAll({ where: { status: 'MEDIUM', classification: 'Temperatura' } });
    const TemperaturaCritical = yield sensor_1.Sensor.findAll({ where: { status: 'CRITICAL', classification: 'Temperatura' } });
    const EnergiaOK = yield sensor_1.Sensor.findAll({ where: { status: 'OK', classification: 'Energia' } });
    const EnergiaMedium = yield sensor_1.Sensor.findAll({ where: { status: 'MEDIUM', classification: 'Energia' } });
    const EnergiaCritical = yield sensor_1.Sensor.findAll({ where: { status: 'CRITICAL', classification: 'Energia' } });
    const PresionOK = yield sensor_1.Sensor.findAll({ where: { status: 'OK', classification: 'Presion' } });
    const PresionMedium = yield sensor_1.Sensor.findAll({ where: { status: 'MEDIUM', classification: 'Presion' } });
    const PresionCritical = yield sensor_1.Sensor.findAll({ where: { status: 'CRITICAL', classification: 'Presion' } });
    const TensionOK = yield sensor_1.Sensor.findAll({ where: { status: 'OK', classification: 'Tension' } });
    const TensionMedium = yield sensor_1.Sensor.findAll({ where: { status: 'MEDIUM', classification: 'Tension' } });
    const TensionCritical = yield sensor_1.Sensor.findAll({ where: { status: 'CRITICAL', classification: 'Tension' } });
    const VientoOK = yield sensor_1.Sensor.findAll({ where: { status: 'OK', classification: 'Viento' } });
    const VientoMedium = yield sensor_1.Sensor.findAll({ where: { status: 'MEDIUM', classification: 'Viento' } });
    const VientoCritical = yield sensor_1.Sensor.findAll({ where: { status: 'CRITICAL', classification: 'Viento' } });
    const MonoxidoOK = yield sensor_1.Sensor.findAll({ where: { status: 'OK', classification: 'Monoxido de Carbono' } });
    const MonoxidoMedium = yield sensor_1.Sensor.findAll({ where: { status: 'MEDIUM', classification: 'Monoxido de Carbono' } });
    const MonoxidoCritical = yield sensor_1.Sensor.findAll({ where: { status: 'CRITICAL', classification: 'Monoxido de Carbono' } });
    const NivelesOK = yield sensor_1.Sensor.findAll({ where: { status: 'OK', classification: 'Niveles' } });
    const NivelesMedium = yield sensor_1.Sensor.findAll({ where: { status: 'MEDIUM', classification: 'Niveles' } });
    const NivelesCritical = yield sensor_1.Sensor.findAll({ where: { status: 'CRITICAL', classification: 'Niveles' } });
    const OtrosGasesOK = yield sensor_1.Sensor.findAll({ where: { status: 'OK', classification: 'Otros Gases' } });
    const OtrosGasesMedium = yield sensor_1.Sensor.findAll({ where: { status: 'MEDIUM', classification: 'Otros Gases' } });
    const OtrosGasesCritical = yield sensor_1.Sensor.findAll({ where: { status: 'CRITICAL', classification: 'Otros Gases' } });
    try {
        res.status(200).json({
            TemperaturaSummary: [`${TemperaturaOK.length}`, `${TemperaturaMedium.length}`, `${TemperaturaCritical.length}`],
            EnergiaSummary: [`${EnergiaOK.length}`, `${EnergiaMedium.length}`, `${EnergiaCritical.length}`],
            PresionSummary: [`${PresionOK.length}`, `${PresionMedium.length}`, `${PresionCritical.length}`],
            TensionSummary: [`${TensionOK.length}`, `${TensionMedium.length}`, `${TensionCritical.length}`],
            VientoSummary: [`${VientoOK.length}`, `${VientoMedium.length}`, `${VientoCritical.length}`],
            MonoxidoSummary: [`${MonoxidoOK.length}`, `${MonoxidoMedium.length}`, `${MonoxidoCritical.length}`],
            NivelesSummary: [`${NivelesOK.length}`, `${NivelesMedium.length}`, `${NivelesCritical.length}`],
            OtrosGasesSummary: [`${OtrosGasesOK.length}`, `${OtrosGasesMedium.length}`, `${OtrosGasesCritical.length}`]
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Un error ocurrio'
        });
    }
});
exports.sensorByType = sensorByType;
