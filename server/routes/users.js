import express from "express";
import { 
  getUsers, 
  postUser, 
  getUser,
  checkUser } from "../controllers/users.js";
const router = express.Router();
router.get("/admin", getUsers);
router.post("/", postUser);
router.post("/:id", getUser);
router.post("/check", checkUser);
export default router;
