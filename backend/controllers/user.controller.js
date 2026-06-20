// backend/controllers/user.controller.js

import User from "../models/User.js";

// GET /api/users
export const getAllUsers = async (req, res) => {
  try {
    // fetch every user, but don't expose hashed passwords
    const users = await User.find().select("-password");

    return res.status(200).json(users);

  } catch (err) {
    console.error("Error fetching users:", err);

    return res.status(500).json({
      msg: "Server error while fetching users",
      error:
        process.env.NODE_ENV === "development"
          ? err.message
          : undefined,
    });
  }
};