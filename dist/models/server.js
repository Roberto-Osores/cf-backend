"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const facility_1 = __importDefault(require("../routes/facility"));
const user_1 = __importDefault(require("../routes/user"));
const facility_2 = require("./facility");
const user_2 = require("./user");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("../swagger"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001'; // Si en el archivo .env despues de PORT se pone ; se rompe todo
        this.listen();
        this.middlewares(); //Es importante que el middleware este antes de las routes/endpoints de la api. Debe ejecutarse antes.
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/facilities', facility_1.default);
        this.app.use('/api/users', user_1.default);
        this.app.use('/api/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
        this.app.get('/api/docs.json', (req, res) => {
            res.setHeader("Content-Type", "application/json");
            res.send(swagger_1.default);
        });
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    //
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield facility_2.Facility.sync();
                yield user_2.User.sync();
            }
            catch (error) {
                console.error('No se puedo establecer la conexion', error);
            }
        });
    }
}
exports.default = Server;
