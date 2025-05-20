import Workpaper from "../models/Workpaper.js"; // adjust path if needed
import type { Request, Response } from "express";
import Content from "../models/Content.js";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"), // .. = /server
});

export const getContents = async (
    _req: Request,
    res: Response
): Promise<void> => {
    try {
        const workpapers = await Content.findAll();
        res.status(200).json(workpapers);
    } catch (error: any) {
        console.error("Error fetching workpapers", error.message);
        res.status(500).json({ error: error.message })
    }
}

export const getContentsbyfirmId = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { firmId } = req.params;

  if (!firmId) {
    res.status(400).json({ error: "firmId is required" });
    return;
  }

  try {
    const contents = await Content.findAll({
      where: { firmId },
      include: [
        {
          model: Workpaper,
          as: "workpaper",
          required: false,
        },
      ],
    });

    res.status(200).json(contents);
  } catch (error: any) {
    console.error("Error fetching contents by firmId", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createContent = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      description,
      region,
      tags,
      workpaperType,
      entityType,
      firmId,
      createdBy,
    } = req.body;

    if (!name || !region || !firmId || !createdBy) {
      res.status(400).json({
        error: "Missing required fields: name, region, firmId, or createdBy.",
      });
      return;
    }

    const newContent = await Content.create({
      name,
      description,
      region,
      tags,
      workpaperType,
      entityType,
      firmId,
      createdBy,
    });

    res.status(201).json(newContent);
  } catch (error: any) {
    console.error("Error creating content:", error.message);
    res.status(500).json({ error: error.message });
  }
};