import { Router } from "express";
import {
    getContents,
} from "../controllers/contentController.js";

const router: Router = Router();

router.get("/", getContents);

export default router;