var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "agnes",
  password: "Kk07212012!",
  database: "onboard",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
