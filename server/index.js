const express = require('express');
const path = require('path');
require('dotenv').config();
const router = require('./routes');

const app = express();

// Middlewares
app.use(express.json());
app.use(router);

app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});