import { Router } from 'express';
import { getFacilities } from  '../controllers/facility';
import validateToken from './validate-token';

const router = Router();

router.get('/',validateToken, getFacilities)

export default router;
