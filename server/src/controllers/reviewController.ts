import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"),
});

import { Request, Response } from "express";
import Review from "../models/Review.js";
import User from "../models/User.js";
import { AuthenticatedRequest } from "../middleware/authenticateJWT";

export const getWorkpaperReviews = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { workpaperId } = req.params;

  if (!workpaperId) {
    res.status(400).json({ error: "Missing workpaperId parameter" });
    return;
  }

  try {
    const reviews = await Review.findAll({
      where: { workpaperId },
      include: [
        {
          model: User,
          attributes: ["userId", "firstName", "lastName", "email"],
        },
      ],
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json(reviews);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const createReview = async (
  req: AuthenticatedRequest,
  res: Response
): Promise<void> => {
  const { workpaperId, rating, comment } = req.body;
  const userId = req.user?.userId;

  console.log("==== Incoming Review Request ====");
  console.log("req.user.userId:", userId);
  console.log("req.body.workpaperId:", workpaperId);
  console.log("req.body.rating:", rating);
  console.log("req.body.comment:", comment);

  if (
    !userId ||
    !workpaperId ||
    typeof rating !== "number" ||
    rating < 1 ||
    rating > 5
  ) {
    res.status(400).json({ error: "Missing or invalid required fields (rating must be 1–5)" });
    return;
  }

  try {
    const [review, created] = await Review.findOrCreate({
      where: { userId, workpaperId },
      defaults: { rating, comment },
    });

    if (!created) {
      res.status(409).json({ error: "User has already reviewed this workpaper" });
      return;
    }

    res.status(201).json(review);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

