import { Router } from "express";
import {
    getWorkpapers
} from "../controllers/workpaperController.js";

const router: Router = Router();

router.get("/", getWorkpapers);

export default router;