import {Router} from 'express';
import { detailsUser, loginUser, newUser } from '../controllers/user';
import validateToken from './validate-token';


const router = Router();
 /**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: "Registro de nuevo usuario. Debe incluir: nombre/s, apellido/s y correo electronico."
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      201:
   *        description: Creado con exito
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Ocurrio un conflicto. Este correo electronico ya existe en la base de datos.
   *      400:
   *        description: No se recibieron los parametros esperados.
   */
router.post('/', newUser);
/**
   * @openapi
   * '/api/users/login':
   *  post:
   *     tags:
   *     - User
   *     summary: "Ingreso de usuario al servicio web. Requiere correo electronico y contraseña"
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/LoginUserInput'
   *     responses:
   *      200:
   *        description: "Ingreso exitoso"
   *      404:
   *        description: "Correo electronico y/o contraseña incorrectos"
   */
router.post('/login', loginUser);
/**
   * @openapi
   * '/api/users/details':
   *  get:
   *     security:
   *     - bearerAuth: []
   *     tags:
   *     - User
   * 
   *     summary: "Recibe el Bearer Token en el header del request. Y devuelve como response, los datos del usuario"
   *     responses:
   *      200:
   *        description: Exito
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/UserDetailsResponse'
   *      401:
   *        description: Intento de acceso no autorizado
   */
router.get('/details', validateToken, detailsUser);


export default router;