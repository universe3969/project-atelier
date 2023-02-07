const getOverviewProduct = require('./productsController');
const getRelatedProducts = require('./relatedProductsController');
const {
  getProductQuestionsAndAnswers,
  getAnswerListofQuestion,
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
  getAnswerListofQuestion,
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