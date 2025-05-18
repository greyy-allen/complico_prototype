import { Router } from "express";
import {
    getWorkpapers,
    getWorkpaper
} from "../controllers/workpaperController.js";

const router: Router = Router();

router.get("/", getWorkpapers);
router.get("/:workpaperId", getWorkpaper);

export default router;