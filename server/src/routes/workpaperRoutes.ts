import { Router } from "express";
import { authenticateJWT } from "../middleware/authenticateJWT";
import { authorizeVendor } from "../middleware/authorizeVendor";
import {
    getWorkpapers,
    getWorkpaper,
    createWorkpaper,
    deleteWorkpaperByContentId,
} from "../controllers/workpaperController.js";

const router: Router = Router();

router.get("/", getWorkpapers);
router.get("/:workpaperId", getWorkpaper);
router.post("/", authenticateJWT, authorizeVendor, createWorkpaper);
router.delete("/:contentId", authenticateJWT, authorizeVendor, deleteWorkpaperByContentId);

export default router;