import express from "express";
import cors from "cors";

const app = express();

// Enable CORS for all origins
app.use(cors());

// Serve images from your image directory
const imagePath = "/home/pilex/assets/flexyshop/images";
app.use(
  "/images",
  express.static(imagePath, {
    maxAge: "30d",
    setHeaders: (res) => {
      res.set("Cache-Control", "public, max-age=2592000");
    },
  })
);

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
