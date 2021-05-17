import express from "express";
const router = express.Router();
import {
  postmedicine,
  getmedicine,
  // getDistinctCity,
  getDistinctCity_BuyMedicine,
  getDistinctMedicine_BuyMedicine,
  getMedicinesByCity_BuyMedicine
} from "../controllers/medicines.js";

router.post("/", postmedicine);
router.post("/getmed", getmedicine);
// router.get("/get-distinct-city", getDistinctCity);
router.get("/getDistinctCity_BuyMedicine", getDistinctCity_BuyMedicine);
router.post("/getDistinctMedicine_BuyMedicine", getDistinctMedicine_BuyMedicine);
router.post("/getMedicinesByCity_BuyMedicine", getMedicinesByCity_BuyMedicine);

export default router;
