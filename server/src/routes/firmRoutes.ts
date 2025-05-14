import { Router } from "express";
import {
    getFirms
} from "../controllers/firmController.js";

const router: Router = Router();

router.get("/", getFirms);

export default router;