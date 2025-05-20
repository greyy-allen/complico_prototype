// middleware/authorizeCustomer.ts
import { Response, NextFunction } from "express";
import { AuthenticatedRequest } from "./authenticateJWT";

export const authorizeCustomer = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role !== "customer") {
    return res.status(403).json({ message: "Forbidden: Customers only" });
  }
  next();
};
