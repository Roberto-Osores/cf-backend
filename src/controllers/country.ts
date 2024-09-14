import { Request, Response } from 'express';




export const allCountries = async (req: Request, res: Response) =>{
    try{
        console.log("Aasd");
        const response = await fetch("https://countryapi.io/api/all?apikey=hC53vFpZrlHzU4jJGxby0sA5X0XGtzEnH9yME00K");

        if(!response.ok){
            throw new Error("Hubo un error");
        }

        const data = await response.json();
        console.log(data);
    }

    catch(error){
        console.error(error);
    }
}