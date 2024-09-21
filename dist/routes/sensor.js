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
router.get('/bytype', validate_token_1.default, sensor_1.getSensorCounts2);
exports.default = router;
