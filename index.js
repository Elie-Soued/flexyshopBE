import express from "express";

const app = express();

app.use(
  "/images",
  express.static(
    ("/home/pilex/assets/flexyshop/images",
    {
      maxAge: "30d", // Cache for 30 days
      setHeaders: (res) => {
        res.set("Cache-Control", "public, max-age=2592000"); // 30 days
      },
    })
  )
);

app.listen(6000, () => console.log("Server running on http://localhost:6000"));
