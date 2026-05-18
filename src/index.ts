import express from "express";
import { PrismaClient } from "@prisma/client";
import chargerRoutes from "./routes/chargers";
import userRoutes from "./routes/users";

const app = express();
app.use(express.json());

// Routes
app.use("/api/chargers", chargerRoutes);
app.use("/api/users", userRoutes);

const port = process.env.PORT || 4000;
const prisma = new PrismaClient();

// Health check endpoint
app.get("/health", async (req, res) => {
  try {
    // Simple DB query to confirm connectivity
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: "ok", db: "connected" });
  } catch (error) {
    res.status(500).json({ status: "error", db: "not connected", details: error.message });
  }
});

app.listen(port, () => {
  console.log(`CSMS backend running on port ${port}`);
});