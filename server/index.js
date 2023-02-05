/* eslint-disable camelcase */
const express = require('express');
const path = require('path');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
//headers: {'Authorization': 'Bearer '+token}
app.use(express.json());
app.use(cors());
const auth = { headers: {'Authorization': process.env.TOKEN} };


// Do not comment this out till deployement
// app.use(express.static(path.join(__dirname, '/client/dist')));

// Routes
app.get('/reviews', (req, res) => {
  console.log('THIS IS A GET REQUEST----->');
  const {sort, product_id, count} = req.query;
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/', {
    headers: {
      'Authorization': process.env.TOKEN
    },
    params: {
      // eslint-disable-next-line camelcase
      product_id,
      count,
      sort,
    },
  }).then(({ data }) => {
    res.send(data);
  })
    .catch((err) => res.send('There was an error'));
});

app.post('/reviews', (req, res) => {
  console.log('THIS IS A POST REQUEST----->');
  const {postData} = req.body;
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/', postData, {
    headers: {
      Authorization: process.env.TOKEN,
    },
  }).then(() => {
    console.log('Yay!');
    res.end();
  }).catch(() => {
    console.log('There was an error');
    res.end();
  });
});

app.get('/reviews/meta', (req, res) => {
  console.log('There was a get request from /reviews/meta');

  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta', {
    headers: {
      Authorization: process.env.TOKEN,
    },
    params: {
      product_id: 37315,
    },
  })
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => res.send('There was an error'));
});

app.put('/reviews/:review_id/helpful', (req, res) => {
  console.log('There was a put request from /reviews/:review_id/helpful');
  const { review_id } = req.params;

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${review_id}/helpful`, null, {
    headers: {
      Authorization: process.env.TOKEN,
    },
  })
    .then(() => {
      console.log('Counted helpful successfully');
      res.status(200);
      res.end();
    })
    .catch((err) => {

      console.log('There was an error');
      res.end();
    });
});

app.put('/reviews/:review_id/report', (req, res) => {
  console.log('There was a put request from /reviews/:review_id/report');
  const { review_id } = req.params;

  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${review_id}/helpful`, null, {
    headers: {
      Authorization: process.env.TOKEN,
    },
  })
    .then(() => {
      console.log('Reported successfully');
      res.status(200);
      res.end();
    })
    .catch((err) => {

      console.log('There was an error');
      res.end();
    });
});


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});