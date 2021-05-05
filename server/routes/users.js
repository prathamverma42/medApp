import express from "express";
import {
  getUsers,
  postUser,
  checkUser,
} from "../controllers/users.js";
const router = express.Router();
router.get("/admin",getUsers);
router.post("/", postUser);
router.get("/", checkUser);
export default router;