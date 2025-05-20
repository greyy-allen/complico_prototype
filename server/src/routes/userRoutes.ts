import { Router } from "express";
import {
    getUsers,
    getUser
} from "../controllers/userController.js";

const router: Router = Router();

router.get("/", getUsers);
router.get("/:userId", getUser);

export default router;