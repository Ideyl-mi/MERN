import { User } from "../schema/user.schema.js";

export const isAuthorized = async (req, res, next) => {
  try {
    const id = req.userID;
    const result = await User.findById(id);

    if (result.role !== "admin") {
      res.status(403).json({
        message: "You are not authenticated",
      });
    } else {
      next();
    }
  } catch (error) {
    res.status(401).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
