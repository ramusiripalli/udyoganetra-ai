import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();


// REGISTER
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // 1) Check required fields
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ msg: "Name, email, and password are required." });
    }

    // 2) See if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // 3) Create user – do NOT hash here; the pre("save") hook on userSchema will do it
    const newUser = new User({
      name,
      email,
      password,   // <— store the raw password, Mongoose middleware will hash it
      role: "user",
    });
    await newUser.save();

    // 4) Sign JWT with payload { id, role }
    const payload = { id: newUser._id, role: newUser.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 5) Return token + user info (excluding password)
    return res.status(201).json({
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ msg: "Server error" });
  }
};



// LOGIN
export const loginUser = async (req, res) => {
 try {
    const { email, password } = req.body;

    // 1) Validate request
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required." });
    }

    // 2) Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // 3) Compare plaintext password to hashed password in DB
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // 4) Sign JWT with payload { id, role }
    const payload = { id: user._id, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 5) Return token + user info (excluding password)
    return res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ msg: "Internal server error" });
  }

};


export const getUserProfile = async (req, res) => {

  try {

    res.status(200).json({
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};