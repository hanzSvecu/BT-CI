import express from 'express';
import UserController from '../controllers/user';
import ValidateUser from '../middlewares/user';


const router = express.Router();

router.post('/signup', ValidateUser.create, UserController.create);



export default router;
