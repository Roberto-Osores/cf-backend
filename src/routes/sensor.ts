import {Router} from 'express';
import { sensorByStatus, getSensorCountsFinal, postSensor, putSensor, deleteSensor} from '../controllers/sensor';
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
   *      400:
   *        description: Ocurrio un error.
   *      401:
   *        description: Error al validar el token. Token no valido..
   */
router.post('/', validateToken, postSensor)
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
router.put('/:id', validateToken, putSensor)
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
router.delete('/:id', validateToken, deleteSensor)
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
   *        description: Error al validar el token. Token no valido..
   */
router.get('/bytype', validateToken, getSensorCountsFinal);




export default router;