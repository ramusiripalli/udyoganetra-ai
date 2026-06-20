import jwt from "jsonwebtoken";
import User from "../models/User.js";

const verifyToken = async (req, res, next) => {
  try {
    // 1) Check for Authorization header
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ msg: "Unauthorized - No token provided" });
    }

    // 2) Extract token
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ msg: "Unauthorized - No token provided" });
    }

    // 3) Verify token (throws if invalid/expired)
    //    Here we assume your login controller signed payload as { id: user._id, role: user.role }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4) Look up the user in DB (excluding password) so we have fresh role
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // 5) Attach user doc (including role) to req.user
    req.user = user;
    next();
  } catch (err) {
    console.error("verifyToken error:", err.message);
    return res.status(401).json({ msg: "Unauthorized - Invalid or expired token" });
  }
};


const isAdmin = (req, res, next) => {
  // 1) Ensure verifyToken attached req.user
  if (!req.user) {
    return res.status(401).json({ msg: "Unauthorized - No user info" });
  }

  // 2) Check role field
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Forbidden - Admins only" });
  }

  next();
};

export { verifyToken, isAdmin };