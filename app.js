require('dotenv').config();
const express = require('express');
const spotifyRoutes = require('./routes/youtube');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON and form-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', spotifyRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
