import express from "express";
import chargerRoutes from "./routes/chargers";
import userRoutes from "./routes/users";

const app = express();
app.use(express.json());

// Routes
app.use("/api/chargers", chargerRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`CSMS backend running on port ${PORT}`);
});
