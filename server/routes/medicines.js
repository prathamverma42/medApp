import express from "express";
const router = express.Router();
import {
  postmedicine,
  getmedicine,
  getDistinctCity,
} from "../controllers/medicines.js";

router.post("/", postmedicine);
router.post("/getmed", getmedicine);
router.get("/get-distinct-city", getDistinctCity);

export default router;
