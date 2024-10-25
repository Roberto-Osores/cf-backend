import { Request, Response } from "express";
import sequelize from "../db/connection";
import { Task } from "../models/task";


export const postTask = async (req: Request, res: Response) => {
    const { titulo, descripcion, icono } = req.body;
  
    try {
      await Task.create({
        titulo: titulo,
        descripcion: descripcion,
        icono: icono,
      });
  
      res.status(201).json({
        message: `La tarea:  ${titulo} fue registrada con exito.`,
      });
    } catch (error) {
      res.status(400).json({
        msg: "Ocurrio un error!",
        error,
      });
    }
  };


  export const putTask = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { descripcion } = req.body;
    
    try{
        const task = await Task.findByPk(id);
        if(!task) {
            return res.status(404).json({ message: 'Tarea no encontrada. Revisa el parametro ingresado' });
        }
        await task.update({ descripcion }); 
         return res.status(204).json(task);
    }
    catch(error){
        return res.status(500).json({ message: 'Error actualizando tarea', error });
    }
};


export const deleteTask = async (req: Request, res: Response) => {
    const id = req.params.id;
    
    try{
        const task = await Task.findByPk(id);

        if(!task) {
            return res.status(404).json({ message: 'Tarea no encontrada. Revisa el parametro ingresado' });
        }
        await task.destroy(); 
         return res.status(204).send();
    }
    catch (error){
        return res.status(500).json({ message: 'Error borrando tarea', error });
    }
};


export const getAllTasks= async (req: Request, res: Response) => {

    const listTasks = await Task.findAll();

    res.json(listTasks);
}