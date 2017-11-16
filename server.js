const express = require("express");
const path = require("path");
<<<<<<< Updated upstream
const { Pool, Client } = require("pg");
const app = express();

const distDir = __dirname + "/dist/";
const connectionString = "postgres://user:password@host:port/database";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || connectionString,
    ssl: true
});

app.use(express.static(distDir));

app.get("/", function(req, res) {});
=======
const app = express();

const distDir = __dirname + "/dist/";

app.use(express.static(distDir));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});
>>>>>>> Stashed changes

app.listen(process.env.PORT || 3000);
