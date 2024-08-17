import { Router } from 'express';
import { getFacilities } from  '../controllers/facility';

const router = Router();

router.get('/', getFacilities)

export default router;
