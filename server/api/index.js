const axios = require('axios');
require('dotenv').config();

const {
  getProductInfo,
  getProductStyles,
  getRelatedProductIds
} = require('./products');

const {
  getProductReview,
  getProductReviewMetadata,
  updateReviewHelpfulCount,
  reportReview,
  postReview
} = require('./reviews');

const {
  getQuestions,
  updateQuestionHelpfulCount,
  updateAnswerHelpfulCount,
  reportAnswer,
  postQuestion,
  postAnswer
} = require('./questionsAndAnswers');


module.exports = {
  getProductInfo,
  getProductStyles,
  getRelatedProductIds,
  getProductReview,
  getProductReviewMetadata,
  updateReviewHelpfulCount,
  reportReview,
  postReview,
  getQuestions,
  updateQuestionHelpfulCount,
  updateAnswerHelpfulCount,
  reportAnswer,
  postQuestion,
  postAnswer
};

