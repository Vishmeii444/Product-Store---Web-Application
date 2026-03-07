import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

// Connect to Database
connectDB();

// API Routes
app.use("/api/products", productRoutes);

//  Root route
app.get("/", (req, res) => {
  res.send("Server is ready");
});

//Export for Vercel Serverless
export default app;