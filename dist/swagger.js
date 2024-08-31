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
 *         id: 007
 *         name: Saul
 *         lastname: Goodman
 *         email: heisenberg@gmail.com
 *         password: cookingblue
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
 *     BookUpdate:
 *       type: object
 *       optional:
 *         - title
 *         - author
 *         - published
 *       properties:
 *         title:
 *           type: string
 *           description: Title of the book
 *         author:
 *           type: string
 *           descripton: Name of the author of the book
 *         published:
 *           type: boolean
 *           descripton: If the book is published or not
 *       example:
 *         title: An updated book title
 *         author: A new author
 *         published: true
 *
 */
const swaggerSpec = (0, swagger_jsdoc_1.default)({
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CF API",
            version: "1.0.0",
            description: "CF Api aims provides valuable data for monitoring and managing facilities",
        },
    },
    apis: [
        `${__dirname}/routes/*.js`,
        `${__dirname}/routes/*.ts`,
        `${__dirname}/swagger.js`,
        `${__dirname}/swagger.ts`,
    ],
});
exports.default = swaggerSpec;
