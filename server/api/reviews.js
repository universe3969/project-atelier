const instance = require('./instance');
require('dotenv').config();

const getProductReview = (productId, sortCriteria ) => {
  return instance.get(process.env.REVIEW_URL, {
    params: {
      product_id: productId,
      sort: sortCriteria,
      count: 200
    }
  }).then(({ data }) => {
    let avgRating = (data.results.reduce((total, review) =>
      total += review.rating, 0)) / data.results.length;
    return { reviews: data, avgRating: avgRating.toFixed(1) };
  });
};

const getProductReviewMetadata = (productId) => {
  return instance.get(`${process.env.REVIEW_URL}/meta`, {
    params: { product_id: productId }
  }).then(({ data }) => data);
};

const updateReviewHelpfulCount = (reviewId) => {
  return instance.put(`${process.env.REVIEW_URL}/${reviewId}/helpful`)
    .then(data => data);
};

const reportReview = (reviewId) => {
  return instance.put(`${process.env.REVIEW_URL}/${reviewId}/report`)
    .then(data => data);
};

const postReview = (reviewPost) => {
  instance.post(process.env.REVIEW_URL, reviewPost)
    .then(data => data);
};

module.exports = {
  getProductReview,
  getProductReviewMetadata,
  updateReviewHelpfulCount,
  reportReview,
  postReview
};