import express from "express";
import path from "path";

const app = express();

const __dirname = path.dirname(new URL(import.meta.url).pathname);

app.use(
  "/images",
  express.static(path.join(__dirname, "images"), {
    maxAge: "30d", // Cache for 30 days
    setHeaders: (res) => {
      res.set("Cache-Control", "public, max-age=2592000"); // 30 days
    },
  })
);

app.listen(6000, () => console.log("Server running on http://localhost:6000"));
