import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js"; 

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log("Server is running on port :" + PORT);
    connectDB();
});

