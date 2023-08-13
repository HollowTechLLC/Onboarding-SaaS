const express = require('express');
const mysql = require('mysql');
const app = express();
const port = process.env.PORT || 3000;

// MySQL Connection
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kk07212012!",
  database: "onboard",
  port: 3306,
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to MySQL!");
});

// Middlewares
app.use(express.json());

// Routes
// Here you'll include the routes you define later

// Starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
