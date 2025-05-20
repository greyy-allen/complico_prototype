// routes/reviews.ts
import express from "express";
import { getWorkpaperReviews, createReview } from "../controllers/reviewController.js";

const router = express.Router();

router.get("/:workpaperId", getWorkpaperReviews);
router.post("/", createReview);

export default router;
