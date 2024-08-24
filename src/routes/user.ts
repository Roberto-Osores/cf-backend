import {Router} from 'express';
import { detailsUser, loginUser, newUser } from '../controllers/user';
import validateToken from './validate-token';


const router = Router();

router.post('/', newUser);
router.post('/login', loginUser);
router.get('/details', validateToken, detailsUser);


export default router;