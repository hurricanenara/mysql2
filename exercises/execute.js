const mysql = require("mysql2/promise");
const path = require("path");
require("dotenv").config({
  path: path.join(__dirname, "..", ".env"),
});

const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;

const connect = async (database) => {
  const connection = await mysql.createConnection({
    host: DB_HOST,
    user: DB_USERNAME,
    password: DB_PASSWORD,
    database,
    multipleStatements: true,
  });

  return connection;
};

const execute = async (sql, values, database) => {
  if (!database) {
    throw Error("No database");
  }

  const connection = await connect(database);
  const [rows] = await connection.query(sql, values);

  connection.end();

  return rows;
};

module.exports = { execute };
