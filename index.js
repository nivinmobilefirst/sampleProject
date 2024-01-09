// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Creating an Express application
const app = express();

// Using middleware to parse JSON requests
app.use(bodyParser.json());

// Sample route to handle GET requests
app.get('/api', (req, res) => {
  res.send('Hello, Express!');
});

// Sample route to handle POST requests with JSON data
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received successfully', data });
});

// Setting up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
