import express from 'express';
import {createProfile,updateProfile,getProfile} from '../controllers/profile.js';
const router=express.Router();
router.post('/',createProfile);
router.put('/:id',updateProfile);
router.get('/:id',getProfile);
export default router;