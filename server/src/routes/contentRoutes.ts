import { Router } from "express";
import {
    getContents,
    getContentsbyfirmId,
    createContent
} from "../controllers/contentController.js";
import { authenticateJWT } from "../middleware/authenticateJWT";
import { authorizeVendor } from "../middleware/authorizeVendor";

const router: Router = Router();

router.get("/", getContents);
router.get("/:firmId", getContentsbyfirmId);
router.post("/", authenticateJWT, authorizeVendor, createContent);

export default router;