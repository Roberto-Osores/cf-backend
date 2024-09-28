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
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/postSensorResponse'
   *      409:
   *        description: Ocurrio un conflicto. Este correo electronico ya existe en la base de datos.
   *      400:
   *        description: No se recibieron los parametros esperados.
   */
router.post('/', sensor_1.postSensor);
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
   *        description: Acceso no autorizado.
   */
router.get('/bystatus', validate_token_1.default, sensor_1.sensorByStatus);
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
   *        description: Acceso no autorizado.
   */
router.get('/bytype', validate_token_1.default, sensor_1.getSensorCountsFinal);
exports.default = router;
