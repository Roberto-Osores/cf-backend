import {Router} from 'express';
import { detailsUser, loginUser, newUser } from '../controllers/user';
import validateToken from './validate-token';


const router = Router();
 /**
   * @openapi
   * '/api/users':
   *  post:
   *     tags:
   *     - User
   *     summary: Register a user
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/CreateUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/CreateUserResponse'
   *      409:
   *        description: Conflict
   *      400:
   *        description: Bad request
   */
router.post('/', newUser);
/**
   * @openapi
   * '/api/users/login':
   *  post:
   *     tags:
   *     - User
   *     summary: Login User
   *     requestBody:
   *      required: true
   *      content:
   *        application/json:
   *           schema:
   *              $ref: '#/components/schemas/LoginUserInput'
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/LoginUserResponse'
   *      404:
   *        description: Not found.
   */
router.post('/login', loginUser);
/**
   * @openapi
   * '/api/users/details':
   *  get:
   *     tags:
   *     - User
   *     summary: Obtains authenticathed User details
   *     responses:
   *      200:
   *        description: Success
   *        content:
   *          application/json:
   *            schema:
   *              $ref: '#/components/schemas/UserDetailsResponse'
   *      401:
   *        description: Unauthorized.
   */
router.get('/details', validateToken, detailsUser);


export default router;