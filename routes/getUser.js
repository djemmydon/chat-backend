import express from "express";
import { getAllUser, getUser } from "../controller/user.js";

const router = express.Router();

router.get("/all", getAllUser);
router.get("/", getUser);
// router.post("/login", login);

export default router;
