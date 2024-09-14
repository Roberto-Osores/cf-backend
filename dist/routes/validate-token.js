"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const secret_key = process.env.SECRET_KEY;
const validateToken = (req, res, next) => {
    var _a;
    const variable = (_a = req.headers['authorization']) !== null && _a !== void 0 ? _a : '';
    if (variable == '') {
        res.status(401).json({
            msg: 'Error'
        });
    }
    try {
        const headerToken = req.headers['authorization'];
        if (headerToken != undefined && headerToken.startsWith('Bearer ')) {
            const bearerToken = headerToken.slice(7);
            jsonwebtoken_1.default.verify(bearerToken, secret_key);
            next();
        }
    }
    catch (error) {
        res.status(401).json({
            msg: 'token no valido'
        });
    }
};
const decodeToken = (req, res, next) => {
    const headerToken = req.headers['authorization'];
    if (headerToken != undefined && headerToken.startsWith('Bearer')) {
        try {
            const bearerToken = headerToken.slice(7);
            const decoded = jsonwebtoken_1.default.verify(bearerToken, process.env.SECRET_KEY || 'queseyo');
            const userEmail = decoded.email;
            console.log(userEmail);
            next();
        }
        catch (error) {
            res.status(401).json({
                msg: 'token no valido'
            });
        }
    }
};
exports.default = validateToken;
