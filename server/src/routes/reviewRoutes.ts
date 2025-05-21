// routes/reviews.ts
import express from "express";
import { getWorkpaperReviews, createReview } from "../controllers/reviewController.js";
import { authenticateJWT } from "../middleware/authenticateJWT";

const router = express.Router();

router.get("/:workpaperId", authenticateJWT, getWorkpaperReviews);
router.post("/", authenticateJWT, createReview);

export default router;
