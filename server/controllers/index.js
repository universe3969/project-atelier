const getOverviewProduct = require('./productsController');
const getRelatedProducts = require('./relatedProductsController');
const {
  getProductQuestionsAndAnswers,
  updateQuestionHelpfulFeedback,
  updateAnswerHelpfulFeedback,
  updateAnswerReportStatus
} = require('./questionsAndAnswersController');
const {
  getProductReviewsAndMeta,
  updateReviewHelpfulFeedback,
  updateReviewReportStatus,
  addProductPreview
} = require('./reviewsController');


module.exports = {
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
};