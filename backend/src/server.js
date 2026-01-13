import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gamesRoutes from "./routes/games.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", gamesRoutes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
