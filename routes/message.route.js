import express from "express";
import { getMessage, sendMessage } from "../controller/message.controller.js";

const router = express.Router();

router.post("/", sendMessage);
router.get("/:conversationId", getMessage);
// router.post("/login", login);

export default router;
