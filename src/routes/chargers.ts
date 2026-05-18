import { Router } from "express";
import { getChargers, registerCharger } from "../controllers/chargerController";

const router = Router();

// GET all chargers
router.get("/", getChargers);

// POST register a new charger
router.post("/register", registerCharger);

export default router;
