import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"), // .. = /server
});

import type { Request, Response } from "express";
import Firm from "../models/Firm.js";
import User from "../models/User.js";

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

export const getFirmByCustomerId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const customerId = req.query.customerId as string;

  if (!customerId) {
    res.status(400).json({ error: "Missing customerId" });
    return;                     // bare return = void
  }

  try {
    const user = await User.findOne({ where: { userId: customerId } });
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    const firm = await Firm.findByPk(user.firmId);
    if (!firm) {
      res.status(404).json({ error: "Firm not found" });
      return;
    }

    res.status(200).json({ firmId: firm.firmId });
  } catch (err: any) {
    console.error("Error fetching firm:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
};