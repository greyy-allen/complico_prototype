import { Router } from "express";
import {
    getProducts,
    getMockProducts,
    sendRequestProduct,
} from "../../src/controllers/productController.js"; // keep .js if controllers compile to JS

const router: Router = Router();

router.get("/", getProducts);
router.get("/mock", getMockProducts);
// router.post("/", sendRequestProduct);

export default router;