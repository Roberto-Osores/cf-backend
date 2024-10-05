"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const country_1 = require("../controllers/country");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
/**
   * @openapi
   * '/api/countries':
   *  get:
   *     tags:
   *     - Countries
   *     summary: "Obtiene Nombres y URL's de banderas de los paises."
   *     responses:
   *      200:
   *        description: Exito
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/SensorSummaryResponse'
   *      401:
   *        description: Error al validar el token. Token no valido.
   *      500:
   *        description: Error al comunicarse con el servidor.
   */
router.get('/', validate_token_1.default, country_1.allCountries);
exports.default = router;
