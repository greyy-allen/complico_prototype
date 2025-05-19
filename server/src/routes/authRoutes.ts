import { Router } from "express";
import { mockLogin } from "../controllers/authController";

const router = Router();
router.post("/mock-login", mockLogin);

export default router;