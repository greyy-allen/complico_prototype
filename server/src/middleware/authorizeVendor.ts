// middleware/authorizeVendor.ts
import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./authenticateJWT";

export const authorizeVendor = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
):Promise<void> => {
  if (req.user?.role !== "vendor") {
    res.status(403).json({ message: "Forbidden: Vendors only" });
  }
  next();
};
