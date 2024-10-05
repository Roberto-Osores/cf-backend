"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validate_token_1 = __importDefault(require("./validate-token"));
const sensor_status_1 = require("../controllers/sensor-status");
const router = (0, express_1.Router)();
/**
   * @openapi
   * '/api/sensorstatus':
   *  post:
   *     tags:
   *     - Sensor Status
   *     summary: "Registro de un nuevo Estado de Sensor. Debe incluir: nombre del estado, color asociado y descripción."
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/postSensorStatusInput'
   *     responses:
   *      201:
   *        description: Creado con exito
   *      400:
   *        description: Ocurrio un error.
   *      401:
   *        description: Error al validar el token. Token no valido..
   */
router.post('/', validate_token_1.default, sensor_status_1.postSensorStatus);
/**
   * @openapi
   * '/api/sensorstatus/{statusId}':
   *  put:
   *     parameters:
   *     - in: path
   *       name: statusId
   *       required: true
   *       schema:
   *        type: string
   *     tags:
   *     - Sensor Status
   *     summary: "Actualización de un Estado de Sensor. Debe incluir: color asociado y descripción."
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/putSensorStatusInput'
   *     responses:
   *      201:
   *        description: Actualizado con exito
   *      400:
   *        description: Ocurrio un error.
   *      401:
   *        description: Error al validar el token. Token no valido..
   */
router.put('/:statusId', validate_token_1.default, sensor_status_1.putSensorStatus);
/**
   * @openapi
   * '/api/sensorstatus/{statusId}':
   *  delete:
   *     parameters:
   *     - in: path
   *       name: statusId
   *       required: true
   *       schema:
   *        type: string
   *     tags:
   *     - Sensor Status
   *     summary: "Borrar un Estado de Sensor. Debe incluir como parametro el nombre del estado a borrar"
   *     requestBody:
   *      required: false
   *     responses:
   *      204:
   *        description: Borrado con exito
   *      404:
   *        description: Ocurrio un error.
   *      401:
   *        description: Error al validar el token. Token no valido..
   *      500:
   *        description: Error al intentat realizar la operación.
   */
router.delete('/:statusId', validate_token_1.default, sensor_status_1.deleteSensorStatus);
exports.default = router;
