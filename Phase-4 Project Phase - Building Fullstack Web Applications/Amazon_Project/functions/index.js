const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "success !",
  });
});
app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);
  if (total > 0) {
    // console.log("Payment received", total);
    // res.send(total);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    console.log(paymentIntent);
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "total must be greater than 0",
    });
  }
});

exports.api = onRequest(app);

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger"); // Replaced console.log with Firebase logger for better log management.
// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// dotenv.config();
// const stripe = require("stripe")(process.env.STRIPE_KEY);

// const app = express();
// app.use(cors({ origin: true }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.status(200).json({ message: "Success!" });
// });

// app.post("/payment/create", async (req, res) => {
//   const total = parseInt(req.query.total, 10); // Ensures the total is parsed as an integer to prevent invalid inputs.

//   if (isNaN(total) || total <= 0) {
//     // Validates that total is a number and greater than 0 to avoid invalid payment amounts.
//     return res
//       .status(403)
//       .json({ message: "Total must be greater than 0 and a valid number." });
//   }

//   try {
//     // Added try-catch to handle potential errors from the Stripe API.
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: total,
//       currency: "usd",
//     });
//     logger.info("Payment intent created successfully", {
//       paymentIntentId: paymentIntent.id,
//     }); // Logs successful creation of payment intent.
//     res.status(201).json({ clientSecret: paymentIntent.client_secret });
//   } catch (error) {
//     logger.error("Error creating payment intent", { error: error.message }); // Logs error details for better debugging.
//     res
//       .status(500)
//       .json({ message: "Internal Server Error", error: error.message }); // Returns a 500 error with details for client-side awareness.
//   }
// });

// exports.api = onRequest(app);
