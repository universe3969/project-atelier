const { validationResult } = require('express-validator');
const {
  getProductReview,
  getProductReviewMetadata,
  updateReviewHelpfulCount,
  reportReview,
  postReview
} = require('../api');

const getProductReviewsAndMeta = async (req, res) => {
  const { productId } = req.params;
  const { reviews, avgRating } = await getProductReview(productId, sortCriteria = 'relevant', count = 5);
  const reviewMeta = await getProductReviewMetadata(productId);

  res.status(200).send({ reviews, avgRating, reviewMeta });
};

const updateReviewHelpfulFeedback = async (req, res) => {
  const { reviewId } = req.params;
  await updateReviewHelpfulCount(reviewId);

  res.status(204).send('Successfully update review helpful count');
};

const updateReviewReportStatus = async (req, res) => {
  const { reviewId } = req.params;
  await reportReview(reviewId);

  res.status(204).send('Successfully update review reported status');
};

const addProductPreview = async (req, res) => {
  const errors = validationResult(req);
  console.log('errors ', errors);
  if (!errors.isEmpty()) {
    res.status(400).send('Invalid input');
  }

  const { productId } = req.params;
  console.log(req.body);
  const result = await postReview(productId, req.body);
  console.log(result);
};

module.exports = {
  getProductReviewsAndMeta,
  updateReviewHelpfulFeedback,
  updateReviewReportStatus,
  addProductPreview
};