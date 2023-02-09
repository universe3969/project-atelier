const instance = require('./instance');
require('dotenv').config();

const getQuestions = (productId, page) => {
  return instance.get(process.env.QUESTIONS_URL, {
    params: {
      product_id: productId,
      count: 100,
      page
    }
  }).then(({ data }) => data.results);
};

const getAnswerList = (questionId, page) => {
  return instance.get(`${process.env.QUESTIONS_URL}/${questionId}/answers`, {
    params: {
      page,
      count: 200
    }
  })
    .then(({ data }) => data);
};

const updateQuestionHelpfulCount = (questionId) => {
  return instance.put(`${process.env.QUESTIONS_URL}/${questionId}/helpful`)
    .then(({ data }) => data);
};

const updateAnswerHelpfulCount = (answerId) => {
  return instance.put(`${process.env.ANSWER_URL}/${answerId}/helpful`)
    .then(({ data }) => data);
};

const reportAnswer = (answerId) => {
  return instance.put(`${process.env.ANSWER_URL}/${answerId}/report`)
    .then(({ data }) => data);
};

const postQuestion = (questionPost) => {
  return instance.post(process.env.QUESTIONS_URL, questionPost)
    .then(data => data);
};

const postAnswer = (questionId, answerPost) => {
  return instance.post(`${process.env.QUESTIONS_URL}/${questionId}/answers`, answerPost)
    .then(data => data);
};

module.exports = {
  getQuestions,
  getAnswerList,
  updateQuestionHelpfulCount,
  updateAnswerHelpfulCount,
  reportAnswer,
  postQuestion,
  postAnswer
};