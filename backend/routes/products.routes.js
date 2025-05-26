import { Router } from "express";
import { getFilteredProducts, getProductDetails, insertProduct } from "../controllers/Products.controller.js";

const router = Router();

router.get('/filter/:category/:pagination/:limit/:sortOrder', getFilteredProducts);

router.get('/product', getProductDetails);

router.post('/insertProd', insertProduct);

export default router;
