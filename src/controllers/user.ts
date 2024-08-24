import { Request, Response} from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';


export const newUser = async (req: Request, res: Response) =>{

    const { email, password, name, lastname } = req.body; // Obtenemos la informacion del usuario del request

    //Revisa si ya existe un usuario creado para este correo, si existe muestra un mensaje, si no crea el registro
    const user = await User.findOne({ where: {email : email}});

    if (user) {
        return res.status(400).json({ 
            msg: `Ya existe una cuenta registrada para el correo ${email}.`
        })
    } //EL return "frena el hilo de ejecucion de la funcion flecha"

    const hashedPassword = await bcrypt.hash(password, 3) //bcrypt recibe de parametro el pass y un numero, y encrypta el pass

    try {

        await User.create({
            email: email,
            password: hashedPassword,
            name: name,
            lastname: lastname
        })
    
        res.json({
            msg: `Tu cuenta fue registrada con exito ${name} ${lastname}`,
            
        })
        
    } catch (error) {
        res.status(400).json({
            msg: 'Ocurrio un error!',
            error
        })
    }

    
}

export const loginUser = async (req: Request, res: Response) =>{

    const { email, password } = req.body; 

//Existe el usuario??
const user: any = await User.findOne({ where: {email : email}});

if (!user){
    return res.status(400).json({
        msg: `El correo ${email} no tiene una cuenta registrada}`
    })
}

//El pass es correcto?

const passwordValid = await bcrypt.compare(password, user.password)
if(!passwordValid){
    return res.status(400).json({
        msg: 'El password es incorrecto'
    })
}

//Enviamos un JWT
    const token = jwt.sign({
        email: email

    }, process.env.SECRet_KEY || 'queseyo');

    res.json({token});

}

///////////////
export const detailsUser = async (req: Request, res: Response) =>{

    const headerToken = req.headers['authorization']
    type myToken = {
        email: string
    }

    
    if (headerToken !=undefined && headerToken.startsWith('Bearer')){
        try {
            
            const bearerToken=headerToken.slice(7);
            const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY || 'queseyo') as myToken;
            const email =decoded.email;
            const user: any = await User.findOne({ where: {email : email}});

            res.json({
                email : `${user.email}`,
                name : `${user.name}`,
                lastname : `${user.lastname}`,
                id : `${user.id}`,

            })


            console.log(email);

        } catch (error) {
            
            res.status(401).json({
                msg: 'token no valido'
            })
        }
    } 
}