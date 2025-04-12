import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(helmet()); //middleware security, helps protect app by adding various http headers
app.use(morgan("dev")); //request logger

app.get("/", (req, res) => {
    console.log(res.getHeaders());
    res.send("Hello from backend");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});