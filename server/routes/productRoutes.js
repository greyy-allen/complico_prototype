import express from "express";
import { getProducts, sendRequestProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);

// router.post("/", sendRequestProduct);

export default router;