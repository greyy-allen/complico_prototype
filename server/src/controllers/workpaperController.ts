import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"), // .. = /server
});

import type { Request, Response } from "express";
import Workpaper from "../models/Workpaper.js";

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