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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllTasks = exports.deleteTask = exports.putTask = exports.postTask = void 0;
const task_1 = require("../models/task");
const postTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { titulo, descripcion, icono } = req.body;
    try {
        yield task_1.Task.create({
            titulo: titulo,
            descripcion: descripcion,
            icono: icono,
        });
        res.status(201).json({
            message: `La tarea:  ${titulo} fue registrada con exito.`,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Ocurrio un error!",
            error,
        });
    }
});
exports.postTask = postTask;
const putTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { descripcion, estado } = req.body;
    try {
        const task = yield task_1.Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada. Revisa el parametro ingresado' });
        }
        yield task.update({ descripcion, estado });
        return res.status(204).json(task);
    }
    catch (error) {
        return res.status(500).json({ message: 'Error actualizando tarea', error });
    }
});
exports.putTask = putTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        const task = yield task_1.Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ message: 'Tarea no encontrada. Revisa el parametro ingresado' });
        }
        yield task.destroy();
        return res.status(204).send();
    }
    catch (error) {
        return res.status(500).json({ message: 'Error borrando tarea', error });
    }
});
exports.deleteTask = deleteTask;
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listTasks = yield task_1.Task.findAll();
    res.json(listTasks);
});
exports.getAllTasks = getAllTasks;
