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
exports.deleteSensorStatus = exports.putSensorStatus = exports.postSensorStatus = void 0;
const sensor_status_1 = require("../models/sensor-status");
const postSensorStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, color, description } = req.body;
    try {
        yield sensor_status_1.Status.create({
            name: name,
            color: color,
            description: description
        });
        res.status(201).json({
            message: `El Estado de Sensor: ${name} y asociado al color: ${color} fue registrado con exito.`,
        });
    }
    catch (error) {
        res.status(400).json({
            message: 'Ocurrio un error! Revisa los parametros ingresados',
            error
        });
    }
});
exports.postSensorStatus = postSensorStatus;
const putSensorStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { name, color, description } = req.body;
    try {
        const status = yield sensor_status_1.Status.findByPk(id);
        if (!status) {
            return res.status(404).json({ message: 'Estado de Sensor no encontrado. Revisa el parametro ingresado' });
        }
        yield status.update({ name, color, description });
        return res.status(204).json(status);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error actualizando estado de sensor', error });
    }
});
exports.putSensorStatus = putSensorStatus;
const deleteSensorStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const status = yield sensor_status_1.Status.findByPk(id);
        if (!status) {
            return res.status(404).json({ message: 'Estado de sensor no encontrado. Revisa el parametro ingresado' });
        }
        yield status.destroy();
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ message: 'Error borrando estado de sensor', error });
    }
});
exports.deleteSensorStatus = deleteSensorStatus;
