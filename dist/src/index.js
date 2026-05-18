"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const chargers_1 = __importDefault(require("./routes/chargers"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
app.use("/api/chargers", chargers_1.default);
app.use("/api/users", users_1.default);
const port = process.env.PORT || 4000;
const prisma = new client_1.PrismaClient();
// Health check endpoint
app.get("/health", async (req, res) => {
    try {
        await prisma.$queryRaw `SELECT 1`;
        res.json({ status: "ok", db: "connected" });
    }
    catch (error) { // 👈 cast error to any
        res.status(500).json({
            status: "error",
            db: "not connected",
            details: error.message
        });
    }
});
app.listen(port, () => {
    console.log(`CSMS backend running on port ${port}`);
});
