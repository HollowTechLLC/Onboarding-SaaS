const express = require('express'); // Importing the express library
const mysql = require('mysql'); // Importing the mysql library
const bodyParser = require('body-parser'); // Importing body-parser middleware

// Creating an express application
const app = express();

// Connecting to MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kk07212012!',
  database: 'onboard'
});

// Connecting to the database
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Importing the registration route
const register = require('./register');
app.use('/register', register); // Mounting the register route at /register

// Starting the server on port 3300
const PORT = 3300;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
