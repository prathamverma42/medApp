import express from "express";
import { createProfile, updateProfile,getProfilebyId } from "../controllers/profile.js";
const router = express.Router();

router.post("/", createProfile);
router.put("/:id", updateProfile);
router.get("/:id",getProfilebyId);
export default router;
