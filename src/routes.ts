import { Router } from "express";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { CreateProductCategoryController } from "./controllers/CreateProductCategoryController";
import { CreateProductController } from "./controllers/CreateProductController";
import { CreateProductWithExistentCategoryController } from "./controllers/CreateProductWithExistentCategory";
import { FindCategoryController } from "./controllers/FindCategoryController";
import { FindProductController } from "./controllers/FindProductController";

const router = Router();

const createProduct = new CreateProductController();
const createCategory = new CreateCategoryController();
const createProductCategory = new CreateProductCategoryController();
const createProductWithExistentCategory =
  new CreateProductWithExistentCategoryController();

const findProduct = new FindProductController();
const findCategory = new FindCategoryController();

router.post("/product", createProduct.handle);
router.post("/category", createCategory.handle);
router.post("/productCategory", createProductCategory.handle);
router.post("/productWithCategory", createProductWithExistentCategory.handle);

router.get("/product/:id", findProduct.handle);
router.get("/category/:id", findCategory.handle);

export default router;
