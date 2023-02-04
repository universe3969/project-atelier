const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const router = require('./routes');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(router);

// Do not comment this out till deployement
// app.use(express.static(path.join(__dirname, '/client/dist')));


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});