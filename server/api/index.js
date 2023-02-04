const axios = require('axios');
require('dotenv').config();

const instance = axios.create({
  headers: { 'Authorization': process.env.TOKEN }
});

const getProductInfo = (productId) => {
  return instance.get(`${process.env.PRODUCT_URL}/${productId}`).then(({ data }) => data);
};

const getProductReview = (productId) => {
  return instance.get(process.env.REVIEW_URL, {
    params: { product_id: productId }
  }).then(({ data }) => {
    let avgRating = (data.results.reduce((total, review) =>
      total += review.rating, 0)) / data.results.length;
    return { reviews: data, avgRating: avgRating.toFixed(1) };
  });
};

const getProductStyles = (productId) => {
  return instance.get(`${process.env.PRODUCT_URL}/${productId}/styles`).then(({ data }) => data);
};

const getRelatedProductIds = (productId) => {
  return instance.get(`${process.env.PRODUCT_URL}/${productId}/related`).then(({ data }) => data);
};


const getQuestions = (productId, page) => {
  return instance.get(process.env.QUESTIONS_URL, {
    params: {
      'product_id': productId,
      'page': page
    }
  }).then(({ data }) => data.results);
};

module.exports = {
  getProductInfo,
  getProductReview,
  getProductStyles,
  getRelatedProductIds,
  getQuestions
};

