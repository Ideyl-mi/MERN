import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, Date.now() + file.originalname);
  },
});

//byte, kilobyte, metabyte, gigabyte, terabyte
//1b, 1kb, 1mb, 1 gb, 1 tb
//1024b = 1kb, 1024kb = 1mb, 1024mb = 1gb, 1024gb = 1 tb
// 1024 * 1024 = 1mb

const limits = {
  fileSize: 1024 * 1024 * 100,
};

//.jpg, .jpeg, .png, .webp, .svg, .avif

const fileFilter = function (req, file, callback) {
  const allowedExtension = [".jpg", ".jpeg", ".png", ".webp", ".svg", ".avif"];

  const fileName = file.originalname;

  const fileExtension = path.extname(fileName);

  if (allowedExtension.includes(fileExtension)) {
    callback(null, true);
  } else {
    callback(new Error("File format not supported"), false);
  }
};

export const upload = multer({
  storage: storage,
  limits: limits,
  fileFilter: fileFilter,
});
