import { verifyToken } from "../utils/jwt.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    const tokenString = req.headers.authorization;
    if (!tokenString) {
      throw new Error("Token is required");
    }
    const tokenArray = tokenString.split(" ");
    const token = tokenArray[1];

    const verifiedToken = await verifyToken(token);

    if (!verifiedToken) {
      throw new Error("You are not authorized");
    }

    req.userID = verifiedToken.id;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
