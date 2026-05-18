import { Request, Response } from "express";

// GET all chargers
export const getChargers = (req: Request, res: Response) => {
  // For now, return mock data
  res.json({ chargers: ["Charger1", "Charger2", "Charger3"] });
};

// POST register a new charger
export const registerCharger = (req: Request, res: Response) => {
  const { id, location } = req.body;

  if (!id || !location) {
    return res.status(400).json({ error: "Charger ID and location are required" });
  }

  // Simulate saving charger
  res.status(201).json({ message: `Charger ${id} registered at ${location}` });
};
