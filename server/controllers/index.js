const getOverviewProduct = require('./productsController');
const getRelatedProducts = require('./relatedProductsController');
const {
  getProductQuestionsAndAnswers,
  updateQuestionHelpfulFeedback,
  updateAnswerHelpfulFeedback,
  updateAnswerReportStatus,
  addProductQuestion,
  addProductAnswer
} = require('./questionsAndAnswersController');
const {
  getProductReviewsAndMeta,
  updateReviewHelpfulFeedback,
  updateReviewReportStatus,
  addProductReview
} = require('./reviewsController');


module.exports = {
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
};