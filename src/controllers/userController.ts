import { Request, Response } from "express";

// GET all users
export const getUsers = (req: Request, res: Response) => {
  // For now, return mock data
  res.json({ users: ["Operator1", "Driver1", "Driver2"] });
};

// POST register a new user
export const registerUser = (req: Request, res: Response) => {
  const { username, role } = req.body;

  if (!username || !role) {
    return res.status(400).json({ error: "Username and role are required" });
  }

  // Simulate saving user
  res.status(201).json({ message: `User ${username} registered with role ${role}` });
};
