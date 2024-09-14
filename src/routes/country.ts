import {Router} from 'express';
import { allCountries } from '../controllers/country';

const router = Router();

router.get('/', allCountries);


export default router;