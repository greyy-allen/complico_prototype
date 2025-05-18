import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"), // .. = /server
});

import type { Request, Response } from "express";
import User from "../models/User.js";


export const getUsers = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error: any) {
    console.error("Error fetching userss", error.message);
    res.status(500).json({ error: error.message });
  }
}