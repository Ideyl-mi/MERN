import { User } from "../schema/user.schema";

export const isAuthorized = async (req, res, next) => {
  try {
    const id = req.userID;
    const result = await User.findById(id);
  } catch (error) {
    res.status(401).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
