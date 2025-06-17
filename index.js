import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Setup __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Absolute path to your image directory
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

app.get("/", (_, res) => res.send("Hello World"));

app.listen(6000, () => {
  console.log("Server is running on port 6000");
});
