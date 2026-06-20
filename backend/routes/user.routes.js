// backend/routes/user.routes.js

import express from "express";
import User from "../models/User.js";
import { getAllUsers } from "../controllers/user.controller.js";

const router = express.Router();

// Public: returns all users
router.get("/", getAllUsers);

// Public: returns user count
router.get("/count", async (req, res) => {
  try {
    const count = await User.countDocuments();

    return res.json({
      count,
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      msg: "Could not get user count",
    });
  }
});

export default router;