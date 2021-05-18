import express from "express";
import {
  getUsers,
  postUser,
  getUser,
  checkUser,
  checkpassword,
  updatepassowrd
} from "../controllers/users.js";
const router = express.Router();
router.get("/admin", getUsers);
router.put("/:id",updatepassowrd);
router.post("/add", postUser);
router.post("/check", checkUser);
router.post("/getuser/:id", getUser);
router.post("/checkpassword/:id", checkpassword);
export default router;
