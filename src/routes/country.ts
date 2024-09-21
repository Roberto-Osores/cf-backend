import {Router} from 'express';
import { allCountries } from '../controllers/country';

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
   *      400:
   *        description: Error.
   */
router.get('/', allCountries);


export default router;