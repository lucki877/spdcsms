import { Router } from "express";
import { getUsers, registerUser } from "../controllers/userController";

const router = Router();

// GET all users
router.get("/", getUsers);

// POST register a new user
router.post("/register", registerUser);

export default router;
