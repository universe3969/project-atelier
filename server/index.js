const express = require('express');
const path = require('path');

const app = express();

// Middlewares
app.use(express.json());


// Do not comment this out till deployement
// app.use(express.static(path.join(__dirname, '/client/dist')));

// Routes


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});