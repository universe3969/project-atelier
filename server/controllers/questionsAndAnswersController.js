const { validationResult } = require('express-validator');
const {
  getQuestions,
  updateQuestionHelpfulCount,
  updateAnswerHelpfulCount,
  reportAnswer,
  postQuestion,
  postAnswer
} = require('../api');

const getProductQuestionsAndAnswers = async (req, res) => {
  const { productId } = req.params;

  let questions = [];
  let page = 1;
  let results = [];

  do {
    results = await getQuestions(productId, page);
    if (results.length) {
      questions = questions.concat(results);
    }
    page++;
  } while (results.length);


  questions = questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  res.status(200).send(questions);
};

const updateQuestionHelpfulFeedback = async (req, res) => {
  const { questionId } = req.params;
  await updateQuestionHelpfulCount(questionId);

  res.status(204).send('Successfully update question helpful count');
};

const updateAnswerHelpfulFeedback = async (req, res) => {
  const { answerId } = req.params;
  await updateAnswerHelpfulCount(answerId);

  res.status(204).send('Successfully update answer helpful count');
};

const updateAnswerReportStatus = async (req, res) => {
  const { answerId } = req.params;
  await reportAnswer(answerId);

  res.status(204).send('Successfully update answer reported status');
};

const addProductQuestion = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send('Invalid input');
  } else {
    await postQuestion(req.body);
    res.status(201).send('Successfully posted new question');
  }
};

const addProductAnswer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send('Invalid input');
  } else {
    const { questionId } = req.params;
    await postAnswer(questionId, req.body);
    res.status(201).send('Successfully posted new answer');
  }
};

module.exports = {
  getProductQuestionsAndAnswers,
  updateQuestionHelpfulFeedback,
  updateAnswerHelpfulFeedback,
  updateAnswerReportStatus,
  addProductQuestion,
  addProductAnswer
};