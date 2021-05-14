import express from "express";
const router = express.Router();
import { postmedicine, getmedicine } from "../controllers/medicines.js";

router.post("/", postmedicine);
router.post("/getmed", getmedicine);

export default router;
