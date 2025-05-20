import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"),
});

import { Request, Response } from "express";
import Review from "../models/Review.js";
import User from "../models/User.js";

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
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, workpaperId, rating, comment } = req.body;

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
