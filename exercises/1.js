const mysql = require("mysql2/promise");

const connect = async () => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "gammie0124",
    database: "seq_orm2",
    multipleStatements: true,
  });

  return connection;
};

// connection.connect();

// const queryResult = connection.query(
//   "SELECT * from classes WHERE id = 4;",
//   (err, result) => {
//     if (err) {
//       throw err;
//     }

//     connection.end();

//     return result;
//   }
// );

// console.log(queryResult);

const getAllClasses = async () => {
  const connection = await connect();

  const [rows] = await connection.execute("select * from classes;");
  console.log(rows);

  connection.end();
};

getAllClasses();
