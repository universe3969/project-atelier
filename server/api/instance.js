const axios = require('axios');
require('dotenv').config();

const instance = axios.create({
  headers: { 'Authorization': process.env.TOKEN }
});

module.exports = instance;