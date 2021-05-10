import express from 'express';
import {postDisease} from '../controllers/diseases.js';
const router=express.Router();
router.post('/',postDisease);
export default router;