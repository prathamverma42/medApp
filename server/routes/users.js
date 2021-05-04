import express from 'express';
import {getUsers,getUser,postUser,checkUser} from '../controllers/users.js';
const router=express.Router();
// router.get('/',getUsers);
router.post('/',postUser);
router.get('/',checkUser);
export default router;

