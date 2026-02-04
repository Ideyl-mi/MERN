export const handleSingleFile = (req, res, next) => {
  try {
    const file = req.file.filename;
    res.status(200).json({
      message: "File uploaded sucessfully",
      url: `http://localhost:8080/${file}`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
