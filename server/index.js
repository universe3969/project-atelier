const express = require('express');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Do not comment this out till deployement
// app.use(express.static(path.join(__dirname, '/client/dist')));

// Routes
app.get('/api/relatedProducts/:productId', (req, res) => {
  const { productId: id } = req.params;

  const relatedProducts = [];
  let products = [];
  let styles = [];
  axios.get(`${process.env.PRODUCT_URL}/${id}/related`, {
    headers: { 'Authorization': process.env.TOKEN }
  })
    .then(({ data: relatedProductIds }) => {
      return Promise.all(relatedProductIds.map(productId => {
        return axios.get(`${process.env.PRODUCT_URL}/${productId}`, {
          headers: { 'Authorization': process.env.TOKEN }
        });
      }));
    }).then(productsData => {
      products = productsData.map(({ data }) => data);
      return Promise.all(productsData.map(({ data }) => {
        return axios.get(`${process.env.PRODUCT_URL}/${data.id}/styles`, {
          headers: { 'Authorization': process.env.TOKEN }
        });
      }));
    }).then(stylesData => {
      styles = stylesData.map(({ data }) => data);
      return Promise.all(products.map(product => {
        return axios.get(`${process.env.REVIEW_URL}`, {
          headers: { 'Authorization': process.env.TOKEN },
          params: { product_id: product.id }
        });
      }));
    }).then(reviewsData => {
      reviewsData.forEach(({ data }, index) => {
        let avgRating = (data.results.reduce((total, result) =>
          total += result.rating, 0)) / data.results.length;
        relatedProducts.push({
          info: products[index],
          styles,
          reviews: data,
          avgRating: avgRating.toFixed(1)
        });
      });
      res.status(200).send(relatedProducts);
    });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});