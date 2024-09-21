import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routesFacilities from '../routes/facility';
import routesUser from '../routes/user';
import routesSensor from '../routes/sensor';
import routesCountries from '../routes/country';
import sequelize from '../db/connection';
import { Facility } from './facility';
import { User } from './user';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger';
import { Sensor } from './sensor';
import { StatusTypes } from './sensor-status';

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
        this.app.use('/api/sensors', routesSensor);
        this.app.use('/api/countries', routesCountries);
        this.app.use ('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        this.app.get ('/api/docs.json', (req: Request, res: Response)=>{
            res.setHeader("Content-Type", "application/json");
            res.send(swaggerSpec);
        })
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
            await StatusTypes.sync()
            await Sensor.sync()
           
        } catch (error){
            console.error ('No se puedo establecer la conexion', error);
        }
    }
}

export default Server;