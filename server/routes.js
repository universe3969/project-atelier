const express = require('express');
const { body, validationResult } = require('express-validator');

const {
  getOverviewProduct,
  getRelatedProducts,
  getProductQuestionsAndAnswers,
  updateQuestionHelpfulFeedback,
  updateAnswerHelpfulFeedback,
  updateAnswerReportStatus,
  getProductReviewsAndMeta,
  updateReviewHelpfulFeedback,
  updateReviewReportStatus,
  addProductPreview
} = require('./controllers');


const router = express.Router();

// Return product product info, styles, reivews, and average rating
router.get('/api/products/:productId', getOverviewProduct);

// Return related products with info, styles, reviews and average ratings
router.get('/api/relatedProducts/:productId', getRelatedProducts);

// Return questions and answers of specific product
router.get('/api/questionsAndAnswers/:productId', getProductQuestionsAndAnswers);

// Update question helpful feedback for a product
router.put('/api/questionsAndAnswers/:questionId/helpful', updateQuestionHelpfulFeedback);

// Update answer helpful feedback for a product
router.put('/api/questionsAndAnswers/:answerId/helpful', updateAnswerHelpfulFeedback);

// Update answer reported status
router.put('/api/questionsAndAnswers/:answerId/report', updateAnswerReportStatus);

// Return product reviews and metadata
router.get('/api/reviews/:productId', getProductReviewsAndMeta);

// Update review helpful feedback for a review
router.put('/api/reviews/:reviewId/helpful', updateReviewHelpfulFeedback);

// Update review reported status
router.put('/api/reviews/:reviewId/report', updateReviewReportStatus);

// Add new product review
router.post('/api/reviews/:productId',
  body('rating', 'rating must be a number between 1 and 5').isInt({ min: 1, max: 5 }),
  body('summary').trim().escape().isLength({ min: 2, max: 60}),
  body('recommend', 'rating must be either true or false').isBoolean(),
  body('name', 'name must have length between 2 and 60').trim().escape().isLength({ min: 2, max: 60 }),
  body('body', 'body must have length between 50 and 1000').trim().escape().isLength({ min: 50, max: 1000}),
  body('email').trim().normalizeEmail().isEmail().isLength({ min: 3, max: 60 }),
  body('photos').isArray(),
  body('characteristics', 'characteristics must be an object').isObject(),
  addProductPreview
);

module.exports = router;