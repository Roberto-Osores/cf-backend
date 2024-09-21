"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const country_1 = require("../controllers/country");
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
   *      400:
   *        description: Error.
   */
router.get('/', country_1.allCountries);
exports.default = router;
