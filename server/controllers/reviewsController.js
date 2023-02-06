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
  let { sortCriteria, count } = req.body;
  sortCriteria = sortCriteria ? sortCriteria : 'relevant';
  count = count ? count : 100;

  try {
    const { reviews, avgRating } = await getProductReview(productId, sortCriteria, count);
    const reviewMeta = await getProductReviewMetadata(productId);

    res.status(200).send({ reviews, avgRating, reviewMeta });
  } catch (err) {
    console.log(err);
    res.status(400).send('Unable to retrieve product reviews and metadata');
  }
};

const updateReviewHelpfulFeedback = async (req, res) => {
  const { reviewId } = req.params;

  try {
    await updateReviewHelpfulCount(reviewId);
    res.status(204).send('Successfully update review helpful count');
  } catch (err) {
    console.log(err);
    res.status(400).send('Failed updating review helpful count');
  }
};

const updateReviewReportStatus = async (req, res) => {
  const { reviewId } = req.params;
  try {
    await reportReview(reviewId);
    res.status(204).send('Successfully update review reported status');
  } catch (err) {
    console.log(err);
    res.status(400).send('Failed updating review reported status');
  }
};

const addProductReview = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send('Invalid input');
  } else {
    try {
      await postReview(req.body);
      res.status(201).send('Successfully posted new review');
    } catch (err) {
      console.log(err);
      res.status(400).send('Failed posting new review');
    }
  }
};

module.exports = {
  getProductReviewsAndMeta,
  updateReviewHelpfulFeedback,
  updateReviewReportStatus,
  addProductReview
};