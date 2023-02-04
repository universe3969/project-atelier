const express = require('express');
const {
  getOverviewProduct,
  getRelatedProducts,
  getProductQuestionsAndAnswers
} = require('./controllers');

const router = express.Router();

// Return product product info, styles, reivews, and average rating
router.get('/api/products/:productId', getOverviewProduct);

// Return related products with info, styles, reviews and average ratings
router.get('/api/relatedProducts/:productId', getRelatedProducts);

// Return questions and answers of specific product
router.get('/api/questionsAndAnswers/:productId', getProductQuestionsAndAnswers);

module.exports = router;