import express from "express";
import { getProducts, getMockProducts, sendRequestProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/mock", getMockProducts);

// router.post("/", sendRequestProduct);

export default router;