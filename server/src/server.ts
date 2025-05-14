import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import sequelize from "./config/sequelize.js";
import "./models/User.js";
import "./models/Review.js";

import pool from "./config/db.js";
import productRoutes from "./routes/productRoutes";
import firmRoutes from "./routes/firmRoutes";
import workpaperRoutes from "./routes/workpaperRoutes";
import userRoutes from "./routes/userRoutes";
import subscriptionRoutes from "./routes/subscriptionRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(express.json());
app.use(cors());
app.use(helmet()); //middleware security, helps protect app by adding various http headers
app.use(morgan("dev")); //request logger

app.use("/api/products", productRoutes);
app.use("/api/firms", firmRoutes);
app.use("/api/workpapers", workpaperRoutes);
app.use("/api/users", userRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

async function initDB(): Promise<void> {
    try {
        await sequelize.authenticate();      // connectivity check
        // await sequelize.sync({ alter: true }); // create/update tables (dev only)
        // ‼ In production replace with migrations instead of alter:true
        console.log("Database initialised");
    } catch (err) {
        console.error("DB init error:", err);
        process.exit(1);
    }
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
}) 