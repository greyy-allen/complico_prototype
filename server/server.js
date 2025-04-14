import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

console.log(PORT);

app.use(express.json());
app.use(cors());
app.use(helmet()); //middleware security, helps protect app by adding various http headers
app.use(morgan("dev")); //request logger

app.get("/", (req, res) => {
    console.log(res.getHeaders());
    res.send("Hello from backend");
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});