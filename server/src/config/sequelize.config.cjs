const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
    path: path.join(__dirname, "..", "..", ".env"),
});

module.exports = {
    development: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host:     process.env.PG_HOST,
    port:     process.env.PG_PORT,
    dialect:  'postgres'
    }
};