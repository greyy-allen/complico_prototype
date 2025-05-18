import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join(__dirname, "..", ".env"), // .. = /server
});

import pg from "pg"; 
import type { PoolConfig, Pool as PgPool } from "pg";

const {
    PG_USER,
    PG_PASSWORD,
    PG_HOST,
    PG_PORT,
    PG_DATABASE,
} = process.env as {
    PG_USER: string;
    PG_PASSWORD: string;
    PG_HOST: string;
    PG_PORT: string;     
    PG_DATABASE: string;
};

[PG_USER, PG_PASSWORD, PG_HOST, PG_PORT, PG_DATABASE].forEach((v, i) => {
    if (!v) throw new Error(`Missing required Postgres env var #${i + 1}`);
});

const { Pool } = pg;  

const poolConfig: PoolConfig = {
    user: PG_USER,
    password: PG_PASSWORD,
    host: PG_HOST,
    port: parseInt(PG_PORT, 10),   
    database: PG_DATABASE,
};

const pool = new Pool(poolConfig);

export default pool;
