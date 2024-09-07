import {Router} from 'express';
import { sensorSummary, sensorByType } from '../controllers/sensor';
import validateToken from './validate-token';

const router = Router();


/**
   * @openapi
   * '/api/sensors':
   *  get:
   *     tags:
   *     - Sensors
   *     summary: "Resumen del estado de todos los sensores."
   *     responses:
   *      200:
   *        description: Exito
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/SensorSummaryResponse'
   *      401:
   *        description: Acceso no autorizado.
   */
router.get('/', validateToken, sensorSummary);
/**
   * @openapi
   * '/api/sensors/byType':
   *  get:
   *     tags:
   *     - Sensors
   *     summary: "Resumen del estado de todos los sensores y catalogados por tipo."
   *     responses:
   *      200:
   *        description: Exito
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/SensorbyTypeResponse'
   *      401:
   *        description: Acceso no autorizado.
   */
router.get('/byType', validateToken, sensorByType);



export default router;