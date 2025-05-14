import type { Request, Response } from "express";
import dotenv from "dotenv";
import Firm from "../models/Firm.js";

dotenv.config();

export const getFirms = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const firms = await Firm.findAll();
    res.status(200).json(firms);
  } catch (error: any) {
    console.error("Error fetching firms", error.message);
    res.status(500).json({ error: error.message });
  }
}