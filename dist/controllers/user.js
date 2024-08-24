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
exports.detailsUser = exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, name, lastname } = req.body; // Obtenemos la informacion del usuario del request
    //Revisa si ya existe un usuario creado para este correo, si existe muestra un mensaje, si no crea el registro
    const user = yield user_1.User.findOne({ where: { email: email } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe una cuenta registrada para el correo ${email}.`
        });
    } //EL return "frena el hilo de ejecucion de la funcion flecha"
    const hashedPassword = yield bcrypt_1.default.hash(password, 3); //bcrypt recibe de parametro el pass y un numero, y encrypta el pass
    try {
        yield user_1.User.create({
            email: email,
            password: hashedPassword,
            name: name,
            lastname: lastname
        });
        res.json({
            msg: `Tu cuenta fue registrada con exito ${name} ${lastname}`,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: 'Ocurrio un error!',
            error
        });
    }
});
exports.newUser = newUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    //Existe el usuario??
    const user = yield user_1.User.findOne({ where: { email: email } });
    if (!user) {
        return res.status(400).json({
            msg: `El correo ${email} no tiene una cuenta registrada}`
        });
    }
    //El pass es correcto?
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: 'El password es incorrecto'
        });
    }
    //Enviamos un JWT
    const token = jsonwebtoken_1.default.sign({
        email: email
    }, process.env.SECRet_KEY || 'queseyo');
    res.json({ token });
});
exports.loginUser = loginUser;
///////////////
const detailsUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const headerToken = req.headers['authorization'];
    if (headerToken != undefined && headerToken.startsWith('Bearer')) {
        try {
            const bearerToken = headerToken.slice(7);
            const decoded = jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || 'queseyo');
            const email = decoded.email;
            const user = yield user_1.User.findOne({ where: { email: email } });
            res.json({
                email: `${user.email}`,
                name: `${user.name}`,
                lastname: `${user.lastname}`,
                id: `${user.id}`,
            });
            console.log(email);
        }
        catch (error) {
            res.status(401).json({
                msg: 'token no valido'
            });
        }
    }
});
exports.detailsUser = detailsUser;
