import express from "express";
import { follow, getFollower } from "../controller/follower.controller.js";

const router = express.Router();

router.put("/:id", follow);
router.get("/:userId", getFollower);

export default router;
