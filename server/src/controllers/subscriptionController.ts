import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"), // .. = /server
});
import { Request, Response } from "express";
import WorkpapersAPI from "../services/workpapersAPI";

const workpapersAPI = new WorkpapersAPI();

export const getSubscribedContent = async (
  req: Request, 
  res: Response
) => {  
  const { firmId } = req.params;
  try {
    const result = await workpapersAPI.getContent(firmId);
    res.status(200).json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const subscribeToWorkpaper = async (
  req: Request, 
  res: Response
): Promise<void> => {
  const { firmId, subscriberId, contentId } = req.params;

  if (!firmId || !subscriberId || !contentId) {
    res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const result = await workpapersAPI.subscribeToContent(
      firmId,
      subscriberId,
      contentId
    );

    if (result.result === "error") {
      res.status(409).json(result);
    }

    res.status(201).json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
