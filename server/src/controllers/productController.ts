import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", "..", ".env"), // .. = /server
});
// -------------------- imports --------------------
import type { Request, Response } from "express";
import workpapersAPI from "../sdk/workpapersAPI.js";

export const getProducts = async (
  _req: Request,
  res: Response
): Promise<void> => {
  try {
    const apiUrl = process.env.API_ENDPOINT;
    if (!apiUrl) throw new Error("Missing API_ENDPOINT env var");

    const response = await fetch(apiUrl);

    if (!response.ok)
      throw new Error(`HTTP error! status: ${response.status}`);

    const data = (await response.json()) as unknown; 
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

/*--------------------------------------------------
  GET /products/mock   – return SDK-generated data
  Query:  ?type=checklist&search=tax
  Header: X-Firm-Id           (optional)
--------------------------------------------------*/
interface FilterParams {
  type?: string;
  search?: string;
}

export const getMockProducts = async (
  req: Request<{}, {}, {}, FilterParams>,
  res: Response
): Promise<void> => {
  try {
    // In a real app you'd verify this header against auth middleware
    const firmId = req.header("X-Firm-Id") ?? "demo-firm";

    // Example placeholder: you could pass these to the SDK later
    const filters: FilterParams = {
      type: req.query.type,
      search: req.query.search,
    };

    const data = workpapersAPI.getMockContent(); // sync function → no await
    res.status(200).json({ firmId, filters, data });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

/*--------------------------------------------------
  POST /products   – not implemented yet
--------------------------------------------------*/
export const sendRequestProduct = async (
  _req: Request,
  res: Response
): Promise<void> => {
  res.status(501).json({ message: "Not implemented" });
};
