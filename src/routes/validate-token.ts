import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';




const validateToken = (req: Request, res: Response, next:NextFunction) => {

    const headerToken = req.headers['authorization']
    

    if (headerToken !=undefined && headerToken.startsWith('Bearer ')){
        try {
            
            
            const bearerToken=headerToken.slice(7);
            jwt.verify(bearerToken, process.env.SECRET_KEY || 'queseyo');
           

            
            

            next()
        } catch (error) {
            
            res.status(401).json({
                msg: 'token no valido'
            })
        }
    } 
}

const decodeToken = (req: Request, res: Response, next:NextFunction) => {

    const headerToken = req.headers['authorization']
    type Mytoken = {
        email: string
    }

    if (headerToken !=undefined && headerToken.startsWith('Bearer')){
        try {
            
            const bearerToken=headerToken.slice(7);
            const decoded = jwt.verify(bearerToken, process.env.SECRET_KEY || 'queseyo') as Mytoken;
            const userEmail =decoded.email;
            console.log(userEmail);

            
            

            next()
        } catch (error) {
            
            res.status(401).json({
                msg: 'token no valido'
            })
        }
    } 
}

export default validateToken;