import { Request, Response } from 'express';
import axios from 'axios';




export const allCountries = async (req: Request, res: Response) =>{
    try{
        const countryData = await axios.get("https://restcountries.com/v2/all?fields=name,flag");

        res.json(countryData.data);
        console.log(countryData.data);
    }

    catch(error){
        console.error(error);
    };
}
