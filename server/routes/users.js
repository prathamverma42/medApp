import express from "express";
import {
  getUsers,
  postUser,
  getUser,
  checkUser,
} from "../controllers/users.js";
const router = express.Router();
router.get("/admin", getUsers);
router.post("/add", postUser);
router.post("/check", checkUser);
router.post("/getuser/:id", getUser);
export default router;
