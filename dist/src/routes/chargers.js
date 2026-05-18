"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const chargerController_1 = require("../controllers/chargerController");
const router = (0, express_1.Router)();
// GET all chargers
router.get("/", chargerController_1.getChargers);
// POST register a new charger
router.post("/register", chargerController_1.registerCharger);
exports.default = router;
