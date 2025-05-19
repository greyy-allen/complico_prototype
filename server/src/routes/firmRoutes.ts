import { Router } from "express";
import {
    getFirms,
    getFirmByCustomerId
} from "../controllers/firmController";

const router: Router = Router();

router.get("/", getFirms);
router.get("/by-customer", getFirmByCustomerId);

export default router;