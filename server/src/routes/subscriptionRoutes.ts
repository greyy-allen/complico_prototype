import { Router } from "express";
import {
  getSubscribedContent,
  subscribeToWorkpaper,
  checkSubscription
} from "../controllers/subscriptionController";

const router: Router = Router();

router.get("/:firmId", getSubscribedContent);
router.post("/:firmId/:subscriberId/:contentId", subscribeToWorkpaper);
router.get("/check/:firmId/:workpaperId", checkSubscription);

export default router;
