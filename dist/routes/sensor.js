"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sensor_1 = require("../controllers/sensor");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
/**
   * @openapi
   * '/api/sensors':
   *  post:
   *     tags:
   *     - Sensors
   *     summary: "Registro de un nuevo sensor. Debe incluir: tipo del sensor, planta a la que pertenece y estado actual."
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/postSensorInput'
   *     responses:
   *      201:
   *        description: Creado con exito
   *      400:
   *        description: Ocurrio un error.
   *      401:
   *        description: Error al validar el token. Token no valido..
   */
router.post('/', validate_token_1.default, sensor_1.postSensor);
/**
   * @openapi
   * '/api/sensors/{id}':
   *  put:
   *     parameters:
   *     - in: path
   *       name: id
   *       required: true
   *       schema:
   *        type: integer
   *        minimun: 1
   *     tags:
   *     - Sensors
   *     summary: "Actualizacion de un sensor. Debe incluir: tipo del sensor, planta a la que pertenece y estado actual."
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/postSensorInput'
   *     responses:
   *      201:
   *        description: Creado con exito
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/postSensorResponse'
   *      400:
   *        description: Ocurrio un error.
   *      401:
   *        description: Error al validar el token. Token no valido..
   */
router.put('/:id', validate_token_1.default, sensor_1.putSensor);
/**
   * @openapi
   * '/api/sensors/{id}':
   *  delete:
   *     parameters:
   *     - in: path
   *       name: id
   *       required: true
   *       schema:
   *        type: integer
   *        minimun: 1
   *     tags:
   *     - Sensors
   *     summary: "Borrar un sensor. Recibe como parametro el id del sensor."
   *     requestBody:
   *      required: false
   *     responses:
   *      204:
   *        description: Borrado con exito
   *      400:
   *        description: Ocurrio un error.
   *      401:
   *        description: Error al validar el token. Token no valido..
   */
router.delete('/:id', validate_token_1.default, sensor_1.deleteSensor);
/**
   * @openapi
   * '/api/sensors/bystatus':
   *  get:
   *     tags:
   *     - Sensors
   *     summary: "Resumen del estado de las lecturas de todos los sensores."
   *     responses:
   *      200:
   *        description: Exito
   *        content:
   *          application/json:
   *            schema:
   *      401:
   *        description: Error al validar el token. Token no valido..
   */
router.get('/bystatus', validate_token_1.default, sensor_1.sensorByStatus2);
/**
   * @openapi
   * '/api/sensors/byType':
   *  get:
   *     tags:
   *     - Sensors
   *     summary: "Resumen del estado de todos los sensores agrupados por tipo de sensor."
   *     responses:
   *      200:
   *        description: Exito
   *        content:
   *          application/json:
   *            schema:
   *      401:
   *        description: Error al validar el token. Token no valido..
   */
router.get('/bytype', validate_token_1.default, sensor_1.getSummary3);
exports.default = router;
