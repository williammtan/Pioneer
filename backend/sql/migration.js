// This initializes the table if it hasn't been set. Don't forget to run this!

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./database.sqlite");

db.run(`CREATE TABLE IF NOT EXISTS Artist (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    biography TEXT NOT NULL,
    is_currently_employed INTEGER DEFAULT 1
)`);
