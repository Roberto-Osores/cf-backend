import {Router} from 'express';
import { sensorByStatus, getSensorCountsFinal, postSensor} from '../controllers/sensor';
import validateToken from './validate-token';

const router = Router();

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
router.post('/', postSensor)
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
router.get('/bytype', validateToken, getSensorCountsFinal);




export default router;