import express from "express";

import {
  registerUser,
  loginUser, 
  getUserProfile
} from "../controllers/auth.controller.js";

import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();


// register
router.post("/register", registerUser);


// login
router.post("/login", loginUser);

router.get("/profile", protect, getUserProfile);

export default router;