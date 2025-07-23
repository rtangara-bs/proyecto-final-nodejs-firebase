import { Router } from "express";
const router = Router();

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

router.get("/products", getAllProducts); // lista todos los productos
router.get("/products/:id", getProductById); //listaqmos por ID

router.post("/products", auth, createProduct);// creamos producto

router.put("/products/:id", auth, updateProduct);// actualizamos producto

router.delete("/products/:id", auth, deleteProduct); //eliminamos producto

export default router;
