import express from "express";
import {
  createProfile,
  updateProfile,
  getProfilebyId,
  getCityById,
} from "../controllers/profile.js";
const router = express.Router();

router.post("/", createProfile);
router.put("/:id", updateProfile);
router.get("/:id", getProfilebyId);
router.post("/city", getCityById);
export default router;
