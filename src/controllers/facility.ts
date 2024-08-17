import { Request, Response } from 'express';
import { Facility } from '../models/facility';

 export const getFacilities= async (req: Request, res: Response) => {

    const listFacilities = await Facility.findAll();

    res.json(listFacilities)
}