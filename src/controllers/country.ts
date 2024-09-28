import { Request, Response } from 'express';
import axios from 'axios';




export const allCountries = async (req: Request, res: Response) =>{
    try{
        const countryData = await axios.get("https://restcountries.com/v2/all?fields=name,flag");
    const modifiedData = countryData.data.map((country: any) => {
        const { independent, ...rest } = country;
        return rest;
    });

    res.json(modifiedData);
    console.log(modifiedData);
    }
    catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving country data");
    }
    };