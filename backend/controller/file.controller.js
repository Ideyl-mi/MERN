export const handleSingleFile = (req, res, next) => {
  try {
    const file = req.file;
    res.status(200).json({
      message: "File uploaded sucessfully",
      link: `http://localhost:7888/${file.filename}`,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
