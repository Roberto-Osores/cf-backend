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
 *     SensorSummaryResponse:
 *       type: object
 *       required:
 *         - Total
 *         - Ok
 *         - Medium
 *         - Critical
 *         - Disabled
 *       properties:
 *         Total:
 *           type: integer
 *           description: "Valor total de todas las lecturas de sensores"
 *         Ok:
 *           type: integer
 *           description: "Valor total de todas las lecturas Ok de sensores"
 *         Medium:
 *           type: integer
 *           description: "Valor total de todas las lecturas Alerta Media de sensores"
 *         Critical:
 *           type: integer
 *           description: "Valor total de todas las lecturas Alerta Roja de sensores"
 *         Disabled:
 *           type: integer
 *           description: "Valor total de todos los sensores deshabilitados"
 *       example:
 *         Total: 41
 *         Ok: 10
 *         Medium: 7
 *         Critical: 15
 *         Disabled: 9
 *     SensorbyTypeResponse:
 *       type: object
 *       required:
 *         - TemperaturaSummary
 *         - EnergiaSummary
 *         - PresionSummary
 *         - TensionSummary
 *         - VientoSummary
 *         - MonoxidoSummary
 *         - NivelesSummary
 *         - OtrosGasesSummary
 *       properties:
 *         TemperaturaSummary:
 *           type: array
 *           description: "Lista ordenada de las lecturas de temperatura. Ej: [OK, Alertas Medias, Alertas Rojas]"
 *         EnergiaSummary:
 *           type: array
 *           description: "Lista ordenada de las lecturas de energia. Ej: [OK, Alertas Medias, Alertas Rojas]"
 *         PresionSummary:
 *           type: array
 *           description: "Lista ordenada de las lecturas de presion. Ej: [OK, Alertas Medias, Alertas Rojas]"
 *         TensionSummary:
 *           type: array
 *           description: "Lista ordenada de las lecturas de tension. Ej: [OK, Alertas Medias, Alertas Rojas]"
 *         VientoSummary:
 *           type: array
 *           description: "Lista ordenada de las lecturas de viento. Ej: [OK, Alertas Medias, Alertas Rojas]"
 *         MonoxidoSummary:
 *           type: array
 *           description: "Lista ordenada de las lecturas de monoxido. Ej: [OK, Alertas Medias, Alertas Rojas]"
 *         NivelesSummary:
 *           type: array
 *           description: "Lista ordenada de las lecturas de niveles. Ej: [OK, Alertas Medias, Alertas Rojas]"
 *         OtrosGasesSummary:
 *           type: array
 *           description: "Lista ordenada de las lecturas de otros gases. Ej: [OK, Alertas Medias, Alertas Rojas]"
 *       example:
 *         TemperaturaSummary: [1,2,3]
 *         EnergiaSummary: [6,4,11]
 *         PresionSummary: [11,21,32]
 *         TensionSummary: [34,7,1]
 *         VientoSummary: [8,17,33]
 *         MonoxidoSummary: [44,33,22]
 *         NivelesSummary: [31,21,5]
 *         OtrosGasesSummary: [23,1,4]
 */
const swaggerSpec = (0, swagger_jsdoc_1.default)({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Challenge Monitoreo",
            version: "1.0.0",
            description: "Esta API busca brindar los servicios esenciales para el funcionamiento de la aplicacion web de monitoreo. ¿Quieres probar la API en Postman? [Importala desde aquí.](https://cf-backend-2.onrender.com/api/docs.json) Nuestro repositorio se encuentra en [GitHub](https://github.com/Roberto-Osores/cf-backend)",
        },
        servers: [{
                url: "https://cf-backend-2.onrender.com/",
            },],
        tags: [{
                name: "User",
                description: "Todo lo relacionado a los destinatarios de la aplicación",
                externalDocs: {
                    description: "Click aquí para mas información",
                    url: "https://github.com/Roberto-Osores/cf-backend/wiki/Usuarios",
                }
            },],
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
