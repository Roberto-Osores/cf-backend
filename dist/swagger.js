"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserInput:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - lastname
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identification number. Auto generated.
 *         name:
 *           type: string
 *           descripton: Name/s of the User.
 *         lastname:
 *           type: string
 *           descripton: Lastname/s of the User.
 *         email:
 *           type: string
 *           description: The User email. Unique value.
 *         password:
 *           type: string
 *           description: Password for accesing the web services.
 *       example:
 *         id: 999
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
 *         lastname:
 *           type: string
 *         email:
 *           type: string
 *     LoginUserInput:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The User email. Unique value.
 *         password:
 *           type: string
 *           description: Password for accesing the web services.
 *       example:
 *         email: heisenberg@gmail.com
 *         password: cookingblue
 *     LoginUserResponse:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The User email. Unique value.
 *         password:
 *           type: string
 *           description: Password for accesing the web services.
 *       example:
 *         email: heisenberg@gmail.com
 *         password: cookingblue
 *     UserDetailsResponse:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - lastname
 *         - email
 *       example:
 *         id: 999
 *         name: John
 *         lastname: Doe
 *         email: johndoe@gmail.com
 */
const swaggerSpec = (0, swagger_jsdoc_1.default)({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CF API",
            version: "1.0.0",
            description: "CF Api aims provides valuable data for monitoring and managing facilities",
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
