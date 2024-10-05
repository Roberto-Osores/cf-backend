import swaggerJsDoc from "swagger-jsdoc"
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
 *       type: array
 *       items:
 *         type: object
 *         required:
 *         - name
 *         - flag
 *       properties:
 *         name:
 *           type: string
 *           description: "Nombre del país."
 *         flag:
 *           type: string
 *           description: "Bandera del país."
 *       example:
 *         name: Argentina
 *         flag: https://flagcdn.com/ar.svg
 *     postSensorInput:
 *       type: object
 *       required:
 *         - type
 *         - facilityName
 *         - status
 *       properties:
 *         type:
 *           type: string
 *           description: "Tipo del sensor."
 *         facilityName:
 *           type: string
 *           description: "Planta a la que pertenece el sensor."
 *         status:
 *           type: string
 *           description: "Estado actual del sensor"
 *       example:
 *         type: niveles
 *         facilityName: planta
 *         status: lectura ok
 *     postSensorResponse:
 *       type: object
 *       required:
 *         - type
 *         - facilityName
 *         - status
 *       properties:
 *         type:
 *           type: string
 *           description: "Tipo del sensor registrado"
 *         facilityName:
 *           type: string
 *           description: "Planta a la que pertenece el sensor"
 *         status:
 *           type: string
 *           description: "Estado actual del sensor"
 */
const swaggerSpec = swaggerJsDoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Challenge Monitoreo",
      version: "1.0.0",
      description: "Esta API busca brindar los servicios esenciales para el funcionamiento de la aplicacion web de monitoreo. ¿Quieres probar la API en Postman? [Importala desde aquí.](https://cf-backend-2.onrender.com/api/docs.json) Nuestro repositorio se encuentra en [GitHub](https://github.com/Roberto-Osores/cf-backend)",
    },
    tags: [{
      name: "User",
      description: "Todo lo relacionado a los destinatarios de la aplicación",
      externalDocs: {
        description: "Click aquí para mas información",
        url: "https://github.com/Roberto-Osores/cf-backend/wiki/Usuarios",
      }
    },],
    components:{
        securitySchemes:{
            bearerAuth:{
                type: "http",
                scheme: 'bearer',
                bearerFormat: "JWT",

            }
        }
    },
    security: [
    {
        bearerAuth:[],
    }
],
  },
  apis: [
    `${__dirname}/routes/*.js`,
    `${__dirname}/routes/*.ts`,
    `${__dirname}/swagger.js`,
    `${__dirname}/swagger.ts`,
  ],
})

export default swaggerSpec