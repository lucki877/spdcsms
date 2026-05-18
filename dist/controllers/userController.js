"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = exports.getUsers = void 0;
// GET all users
const getUsers = (req, res) => {
    // For now, return mock data
    res.json({ users: ["Operator1", "Driver1", "Driver2"] });
};
exports.getUsers = getUsers;
// POST register a new user
const registerUser = (req, res) => {
    const { username, role } = req.body;
    if (!username || !role) {
        return res.status(400).json({ error: "Username and role are required" });
    }
    // Simulate saving user
    res.status(201).json({ message: `User ${username} registered with role ${role}` });
};
exports.registerUser = registerUser;
