import type { Request, Response } from "express";
import dotenv from "dotenv";
import Workpaper from "../models/Workpaper.js";

dotenv.config();

export const getWorkpapers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const workpapers = await Workpaper.findAll();
    res.status(200).json(workpapers);
  } catch (error: any) {
    console.error("Error fetching workpapers", error.message);
    res.status(500).json({ error: error.message });
  }
}