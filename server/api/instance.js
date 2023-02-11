const axios = require('axios');
const { TOKEN } = require('../config');

const instance = axios.create({
  headers: { 'Authorization': TOKEN }
});

module.exports = instance;