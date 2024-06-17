const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3308,
  user: "root",
  password: "876929JAY",
  database: "quote_app",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL server.");
});

module.exports = connection;
