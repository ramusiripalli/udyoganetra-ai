import express from "express";

import {
  registerUser,
  loginUser, 
  getUserProfile
} from "../controllers/auth.controller.js";

import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();


// register
router.post("/register", registerUser);


// login
router.post("/login", loginUser);

router.get("/profile", verifyToken, getUserProfile);

export default router;