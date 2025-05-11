import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const {
    PG_USER: username,
    PG_PASSWORD: password,
    PG_HOST: host,
    PG_PORT,
    PG_DATABASE: database
} = process.env as Record<string, string>;

[username, password, host, PG_PORT, database].forEach((v, i) => {
    if (!v) throw new Error(`Missing Postrgres env #${i + 1}`);
});

const port = parseInt(PG_PORT, 10);

const sequelize = new Sequelize(database, username, password, {
    host, 
    port,
    dialect: "postgres",
    logging: false,
});

export default sequelize;