"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../controllers/user");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
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
  *      400:
  *        description: Ocurrio un error al intentar crear el registro.
  */
router.post('/', user_1.newUser);
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
router.post('/login', user_1.loginUser);
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
   *        description: Error al validar el token. Token no valido.
   */
router.get('/details', validate_token_1.default, user_1.detailsUser);
exports.default = router;
