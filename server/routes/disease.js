import express from "express";
import {
  postDisease,
  getDistinctCategory,
  getDistinctDiseasesByCategory,
  getdiseasesinfo,
} from "../controllers/diseases.js";
const router = express.Router();
router.post("/", postDisease);
router.get("/getDistinctCategory", getDistinctCategory);
router.post("/getDistinctDiseasesByCategory", getDistinctDiseasesByCategory);
router.post("/getdiseasesinfo", getdiseasesinfo);
export default router;
