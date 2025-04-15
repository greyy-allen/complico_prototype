import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

import pool from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

console.log(PORT);

app.use(express.json());
app.use(cors());
app.use(helmet()); //middleware security, helps protect app by adding various http headers
app.use(morgan("dev")); //request logger

app.use("/api/products", productRoutes);

async function initDB() {
    try {
        const createUsersTable = await pool.query(
            `
            CREATE TABLE IF NOT EXISTS Users (
                user_id    SERIAL PRIMARY KEY,
                username   VARCHAR(50) NOT NULL,
                email      VARCHAR(100) NOT NULL UNIQUE,
                password   VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            `
        )

        const createReviewsTable = await pool.query(
            `
            CREATE TABLE IF NOT EXISTS Reviews (
            review_id     INT           GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            user_id       INT           NOT NULL, 
            product_id    INT           NOT NULL,
            rating        INT           NOT NULL CHECK (rating BETWEEN 1 AND 5),
            comment       TEXT,
            created_at    TIMESTAMP     DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT fk_user
            FOREIGN KEY (user_id)
            REFERENCES Users (user_id)
            );
            `
        )

        console.log("Database initialized")
    } catch (error) {
        console.log("Error initDB", error);
    }
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
}) 