import { Router } from "express";
const router = Router();

import { login } from "../controllers/auth.controller.js";

router.post("/login", login); //endpoint donde obtenemos JWT

export default router;
