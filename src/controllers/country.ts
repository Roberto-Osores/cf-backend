import { Request, Response } from "express";
import axios from "axios";
import dotenv from 'dotenv';

dotenv.config();
const country_api : string = process.env.COUNTRY_API as string;

export const allCountries = async (req: Request, res: Response) => {
  try {
    const countryData = await axios.get(
      country_api
    );
    const modifiedData = countryData.data.map((country: any) => {
      const { independent, ...rest } = country;
      return rest;
    });

    res.json(modifiedData);
    console.log(modifiedData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving country data");
  }
};
