// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
// Creating an Express application
const app = express();
const cors = require('cors');

// Using middleware to parse JSON requests
app.use(bodyParser.json());

app.use(cors());
// Sample route to handle GET requests

app.get('/api', (req, res) => {
  res.send('Hello, Express!');
});

// Sample route to handle POST requests with JSON data
app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json({ message: 'Data received successfully', data });
});

const validUser = {
  username: 'demoUser',
  password: 'demoPassword',
};
const secretKey = 'sdsdsdsdsdww';

app.get('/login', (req, res) => {

  if (validUser.username && validUser.password) {
    // Generate a token
    const token = jwt.sign({ username: validUser.username }, secretKey, { expiresIn: '1h' });

    const response = {
      status: 201,
      message: 'Login Successfully',
      token: token,
    };

    res.status(response.status).json(response);
  } else {
    const response = {
      status: 401,
      message: 'Authentication Failed',
    };

    res.status(response.status).json(response);
  }
});
// Setting up the server to listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
