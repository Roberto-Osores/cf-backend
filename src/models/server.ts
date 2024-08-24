import express, {Application} from 'express';
import cors from 'cors';
import routesFacilities from '../routes/facility';
import routesUser from '../routes/user';
import sequelize from '../db/connection';
import { Facility } from './facility';
import { User } from './user';

class Server{
    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001'; // Si en el archivo .env despues de PORT se pone ; se rompe todo
        this.listen();
        this.middlewares(); //Es importante que el middleware este antes de las routes/endpoints de la api. Debe ejecutarse antes.
        this.routes();
        this.dbConnect();
        
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
        this.app.use('/api/facilities', routesFacilities);
        this.app.use('/api/users', routesUser);
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }

//
    async dbConnect(){
        try {
            await Facility.sync()
            await User.sync()
        
        } catch (error){
            console.error ('No se puedo establecer la conexion', error);
        }
    }
}

export default Server;