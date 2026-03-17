import jwt from "jsonwebtoken";
import { getJwtSecret } from "../utils/jwt.js";

export const authMiddleware = (req, res, next) => {

  const header = req.headers.authorization;

  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const token = header.split(" ")[1];

  try {

    const decoded = jwt.verify(token, getJwtSecret());

    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({ message: "Invalid or expired token" });

  }
};