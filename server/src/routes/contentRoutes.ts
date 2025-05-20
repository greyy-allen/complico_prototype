import { Router } from "express";
import {
    getContents,
    getContentsbyfirmId
} from "../controllers/contentController.js";

const router: Router = Router();

router.get("/", getContents);
router.get("/:firmId", getContentsbyfirmId);

export default router;