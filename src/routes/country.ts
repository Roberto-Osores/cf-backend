import {Router} from 'express';
import { allCountries } from '../controllers/country';
import validateToken from './validate-token';

const router = Router();

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
router.get('/', validateToken, allCountries);


export default router;