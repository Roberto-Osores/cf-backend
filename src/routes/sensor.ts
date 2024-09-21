import {Router} from 'express';
import { sensorByStatus, getSensorCounts2} from '../controllers/sensor';
import validateToken from './validate-token';

const router = Router();


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
router.get('/bystatus', validateToken, sensorByStatus);
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
router.get('/bytype', validateToken, getSensorCounts2);




export default router;