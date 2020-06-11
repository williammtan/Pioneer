// This creates initialized items and inserts it to the sql database

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("./database.sqlite");
