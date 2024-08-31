"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
/**
 * @openapi
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     CreateUserInput:
 *       type: object
 *       required:
 *         - name
 *         - lastname
 *         - password
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           description: "Nombre/s del usuario."
 *         lastname:
 *           type: string
 *           description: "Apellido/s del usuario."
 *         password:
 *           type: string
 *           description: "Contraseña del usuario"
 *         email:
 *           type: string
 *           description: "Correo electronico del usuario. Cada correo solo puede estar asociado a una unica cuenta"
 *       example:
 *         name: John
 *         lastname: Doe
 *         email: johndoe@gmail.com
 *         password: strongpassword
 *     CreateUserResponse:
 *       type: object
 *       required:
 *         - name
 *         - lastname
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           description: "Nombre/s usados en el registro del usuario"
 *         lastname:
 *           type: string
 *           description: "Apellido/s usados en el registro del usuario"
 *         email:
 *           type: string
 *           description: "Correo electronico usado en el registro del usuario"
 *     LoginUserInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: "Correo electronico del usuario que fue usado durante el proceso de registro"
 *         password:
 *           type: string
 *           description: "Contraseña registrada por el usuario durante el proceso de registro"
 *       example:
 *         email: johndoe@gmail.com
 *         password: strongpassword
 *     UserDetailsResponse:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - lastname
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           description: "Nombre/s del usuario. Obtenidod desde la base de datos"
 *         lastname:
 *           type: string
 *           description: "Apellido/s del usuario. Obtenido desde la base de datos"
 *         password:
 *           type: string
 *           description: "Contraseña del usuario. Obtenido desde la base de datos"
 *         email:
 *           type: string
 *           description: "Correo electronico del usuario. Obtenido desde la base de datos"
 *       example:
 *         id: 41
 *         name: John
 *         lastname: Doe
 *         email: johndoe@gmail.com
 */
const swaggerSpec = (0, swagger_jsdoc_1.default)({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Challenge Monitoreo",
            version: "1.0.0",
            description: "Esta API busca brindar los servicios esenciales para el funcionamiento de la aplicacion web de monitoreo",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: 'bearer',
                    bearerFormat: "JWT",
                }
            }
        },
        security: [
            {
                bearerAuth: [],
            }
        ],
    },
    apis: [
        `${__dirname}/routes/*.js`,
        `${__dirname}/routes/*.ts`,
        `${__dirname}/swagger.js`,
        `${__dirname}/swagger.ts`,
    ],
});
exports.default = swaggerSpec;
