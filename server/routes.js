const express = require('express');
const { body, validationResult } = require('express-validator');

const {
  getOverviewProduct,
  getRelatedProducts,
  getProductQuestionsAndAnswers,
  updateQuestionHelpfulFeedback,
  updateAnswerHelpfulFeedback,
  updateAnswerReportStatus,
  addProductQuestion,
  addProductAnswer,
  getProductReviewsAndMeta,
  updateReviewHelpfulFeedback,
  updateReviewReportStatus,
  addProductReview
} = require('./controllers');

const router = express.Router();

// Return product product info, styles, reivews, and average rating
router.get('/api/products/:productId', getOverviewProduct);

// Return related products with info, styles, reviews and average ratings
router.get('/api/relatedProducts/:productId', getRelatedProducts);

// Return questions and answers of specific product
router.get('/api/questionsAndAnswers/:productId', getProductQuestionsAndAnswers);

// Update question helpful feedback for a product
router.put('/api/questionsAndAnswers/questions/:questionId/helpful', updateQuestionHelpfulFeedback);

// Update answer helpful feedback for a product
router.put('/api/questionsAndAnswers/answers/:answerId/helpful', updateAnswerHelpfulFeedback);

// Update answer reported status
router.put('/api/questionsAndAnswers/answers/:answerId/report', updateAnswerReportStatus);

// Post new question for a product
router.post('/api/questions/new',
  body('product_id', 'product ID must be an integer').isInt(),
  body('name', 'name must have length between 2 and 60').trim().escape().isLength({ min: 2, max: 60 }),
  body('email', 'Invalid email').trim().normalizeEmail().isEmail().isLength({ min: 3, max: 60 }),
  body('body', 'body must have length between 5 and 1000').trim().isLength({ min: 5, max: 1000}),
  addProductQuestion);

// Post new answer for a product's question
router.post('/api/questions/:questionId/answers/new',
  body('name', 'name must have length between 2 and 60').trim().escape().isLength({ min: 2, max: 60 }),
  body('email', 'Invalid email').trim().normalizeEmail().isEmail().isLength({ min: 3, max: 60 }),
  body('body', 'body must have length between 5 and 1000').trim().isLength({ min: 5, max: 1000}),
  body('photos').isArray(),
  addProductAnswer);

// Return product reviews and metadata
router.get('/api/reviews/:productId/:sortCriteria', getProductReviewsAndMeta);

// Update review helpful feedback for a review
router.put('/api/reviews/:reviewId/helpful', updateReviewHelpfulFeedback);

// Update review reported status
router.put('/api/reviews/:reviewId/report', updateReviewReportStatus);

// Add new product review
router.post('/api/reviews/new',
  body('product_id', 'product ID must be an integer').isInt(),
  body('rating', 'rating must be a number between 1 and 5').isInt({ min: 1, max: 5 }),
  body('summary').trim().isLength({ min: 2, max: 60}),
  body('recommend', 'rating must be either true or false').isBoolean(),
  body('name', 'name must have length between 2 and 60').trim().escape().isLength({ min: 2, max: 60 }),
  body('body', 'body must have length between 50 and 1000').trim().isLength({ min: 50, max: 1000}),
  body('email', 'Invalid email').trim().normalizeEmail().isEmail().isLength({ min: 3, max: 60 }),
  body('photos').isArray(),
  body('characteristics', 'characteristics must be an object').isObject(),
  addProductReview
);

module.exports = router;