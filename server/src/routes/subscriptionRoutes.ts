import { Router } from "express";
import {
  getSubscribedContent,
  subscribeToWorkpaper
} from "../controllers/subscriptionController";

const router: Router = Router();

router.get("/:firmId", getSubscribedContent);
router.post("/:firmId/:subscriberId/:contentId", subscribeToWorkpaper);

export default router;
