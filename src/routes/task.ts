import {Router} from 'express';
import { deleteTask, getAllTasks, postTask, putTask } from '../controllers/task';

const router = Router();


router.post('/',  postTask)
router.get('/', getAllTasks)
router.put('/:id', putTask)
router.delete ('/:id', deleteTask)


export default router;