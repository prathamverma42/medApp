<<<<<<< HEAD
import express from "express";
import { createProfile, updateProfile } from "../controllers/profile.js";
const router = express.Router();

router.post("/:id", createProfile);
router.put("/:id", updateProfile);
export default router;
=======
import express from 'express';
import {createProfile,updateProfile,getProfile} from '../controllers/profile.js';
const router=express.Router();
router.post('/',createProfile);
router.put('/:id',updateProfile);
router.get('/:id',getProfile);
export default router;
>>>>>>> e9a16304fe20880760b3f4d4c8f10588a5a905da
