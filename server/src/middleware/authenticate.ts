import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export const authenticateAndValidateFirm = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const firmIdHeader = req.headers["x-firm-id"] as string;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Missing or invalid token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token) as {
      uuid: string;
      role: "vendor" | "customer";
      workpapers: {
        firms: { id: string; shortId: string }[];
      };
    };

    const matchingFirm = decoded.workpapers.firms.find((f) => f.id === firmIdHeader);
    if (!matchingFirm) {
      return res.status(401).json({ error: "Firm not authorized" });
    }

    // Attach to request
    (req as any).user = {
      uuid: decoded.uuid,
      role: decoded.role,
    };
    (req as any).firm = matchingFirm;

    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
