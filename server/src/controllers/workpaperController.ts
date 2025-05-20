import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"), // .. = /server
});

const JWT_SECRET = process.env.JWT_SECRET || "supersecret123!@";

import type { Request, Response } from "express";
import Workpaper from "../models/Workpaper.js";
import Content from "../models/Content.js";

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
};

export const getWorkpaper = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { workpaperId } = req.params;

    const workpaper = await Workpaper.findByPk(workpaperId);

    if (!workpaper) {
      res.status(404).json({ error: "Workpaper not found"});
      return;
    };

    res.status(200).json(workpaper);
  } catch (error:any) {
    console.error("Error fetching workpaper by ID", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createWorkpaper = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { contentId } = req.body;

  if (!contentId) {
    res.status(400).json({ message: "contentId is required" })
    return;
  }

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Missing or invalid Authorization header "});
    return;
  }

  const token = authHeader.split(" ")[1];
  let userId: string;

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { userId: string};
    userId = payload.userId;
  } catch (error) {
    res.status(401).json({ error: "Invalid or expired token" });
    return
  }

  try {
    const existing = await Workpaper.findOne({ where: { contentId }});
    if (existing) {
      res.status(409).json({ message: "Workpaper already exists for this content "})
      return;
    }

    const content = await Content.findByPk(contentId);
    if (!content) {
      res.status(404).json({ error: "Content not found" });
      return;
    }

    const newWorkpaper = await Workpaper.create({ 
      contentId: content.contentId,
      createdBy: userId,
      publishedBy: userId,
      region: content.region,
      name: content.name,
      description: content.description,
      tags: content.tags,
      workpaperType: content.workpaperType,
      entityType: content.entityType,
      publishedAt: null,
    });

    res.status(201).json(newWorkpaper);
  } catch (error: any) {
    console.error("Error creating workpaper", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const deleteWorkpaperByContentId = async (
  req: Request,
  res: Response
): Promise<void>=> {
  const { contentId } = req.params;

  if (!contentId) {
    res.status(400).json({ error: "contentId is required" });
    return;
  }

  try {
    const deleted = await Workpaper.destroy({ where: {contentId }});

    if (!deleted) {
      res.status(404).json({ message: "Workpaper not found" });
      return;
    }

    res.status(200).json({ message: "Listing successfully removed" });
  } catch (error: any) {
    console.error("Error deleting workpaper", error.message);
    res.status(500).json({ error: error.message });
  }
}
