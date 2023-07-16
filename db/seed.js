const mysql = require("mysql2");
const fs = require("fs");

const seedQuery = fs.readFileSync("db/seed.sql", { encoding: "utf-8" });

const { DB_USERNAME, DB_HOST, DB_PASSWORD, DB_DATABASE } = process.env;

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  multipleStatements: true,
});

connection.connect();

console.log("running seed query...");

connection.query(seedQuery, (error) => {
  if (error) {
    throw error;
  }

  console.log("done running seed query");

  connection.end();
});
