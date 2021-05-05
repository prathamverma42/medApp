import express from "express";
import { createProfile, updateProfile } from "../controllers/profile.js";
const router = express.Router();

router.post("/:id", createProfile);
router.put("/:id", updateProfile);
export default router;
