import express from "express";
import { createProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts); // to get products
router.post("/", createProduct); //to create a new product
router.put("/:id", updateProduct); // to update an existing product
router.delete("/:id", deleteProduct); // to delete an existing product
// all of the above are gonna be prefixed with "/api/products" 
// from app.use("/api/products", productRoutes);

export default router;