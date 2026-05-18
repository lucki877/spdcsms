"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCharger = exports.getChargers = void 0;
// GET all chargers
const getChargers = (req, res) => {
    // For now, return mock data
    res.json({ chargers: ["Charger1", "Charger2", "Charger3"] });
};
exports.getChargers = getChargers;
// POST register a new charger
const registerCharger = (req, res) => {
    const { id, location } = req.body;
    if (!id || !location) {
        return res.status(400).json({ error: "Charger ID and location are required" });
    }
    // Simulate saving charger
    res.status(201).json({ message: `Charger ${id} registered at ${location}` });
};
exports.registerCharger = registerCharger;
