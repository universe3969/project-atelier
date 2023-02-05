const instance = require('./instance');
require('dotenv').config();

const getQuestions = (productId, page) => {
  return instance.get(process.env.QUESTIONS_URL, {
    params: {
      product_id: productId,
      page
    }
  }).then(({ data }) => data.results);
};

const updateQuestionHelpfulCount = (questionId) => {
  return instance.put(`${process.env.QUESTIONS_URL}/${questionId}/helpful`)
    .then(({ data }) => data);
};

const updateAnswerHelpfulCount = (answerId) => {
  return instance.put(`${process.env.ANSWERS_URL}/${answerId}/helpful`)
    .then(({ data }) => data);
};

const reportAnswer = (answerId) => {
  return instance.put(`${process.env.ANSWERS_URL}/${answerId}/report`)
    .then(({ data }) => data);
};


module.exports = {
  getQuestions,
  updateQuestionHelpfulCount,
  updateAnswerHelpfulCount,
  reportAnswer
};