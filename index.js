import express from "express";
import cors from "cors";
import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

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

app.post("/create-checkout-session", async (req, res) => {
  const { amount } = req.body;

  const stripeAmount = Math.round(amount * 100);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "Invoice payment",
          },
          unit_amount: stripeAmount,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: "https://your-site.com/success",
    cancel_url: "https://your-site.com/cancel", // customized (see below)
  });

  res.json({ url: session.url });
});

app.get("/", (req, res) => res.send("hello world"));

app.listen(4242, () => {
  console.log("Server is running on port 4242");
});
