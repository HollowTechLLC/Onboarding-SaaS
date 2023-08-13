const express = require('express'); // Importing the express library
const router = express.Router(); // Creating a router for the register endpoint

// POST endpoint for registering a user
router.post('/', (req, res) => {
  const { username, password, role } = req.body; // Destructuring request body

  // Query to insert a new user into the 'Users' table
  const query = `INSERT INTO Users (username, password, role) VALUES ('${username}', '${password}', '${role}')`;

  // Executing the query
  db.query(query, (err, result) => {
    if (err) res.status(500).send('An error occurred');
    else res.status(200).send('User registered successfully');
  });
});

module.exports = router; // Exporting the router
