import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/productRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();
app.use(express.json()); // allows to accept JSON data in the req.body

app.use("/api/products", productRoutes);

//configuration
if (process.env.NODE_ENV === "production") {
  //dist is a static asset
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get('/*jin', (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});

export default app;