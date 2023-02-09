const { validationResult } = require('express-validator');
const {
  getQuestions,
  getAnswerList,
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

  try {
    do {
      results = await getQuestions(productId, page);
      if (results.length) {
        questions = questions.concat(results);
      }
      page++;
    } while (results.length);

    questions = questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
    res.status(200).send(questions);
  } catch (err) {
    console.log(err);
    res.status(400).send('Unable to retrieve questions');
  }
};

const getAnswerListofQuestion = async (req, res) => {
  const { questionId } = req.params;

  let answers = [];
  let page = 1;
  let results = [];

  try {
    do {
      results = await getAnswerList(questionId, page);
      if (results.results.length) {
        answers = answers.concat(results.results);
      }
      page++;
    } while (results.results.length);
    res.status(200).send(answers);
  } catch (err) {
    console.log(err);
    res.status(400).send('Unable to retrieve answer list');
  }
};

const updateQuestionHelpfulFeedback = async (req, res) => {
  const { questionId } = req.params;
  try {
    await updateQuestionHelpfulCount(questionId);
    res.status(204).send('Successfully update question helpful count');
  } catch (err) {
    console.log(err);
    res.status(400).send('Failed updating question helpful count');
  }
};

const updateAnswerHelpfulFeedback = async (req, res) => {
  const { answerId } = req.params;

  try {
    await updateAnswerHelpfulCount(answerId);
    res.status(204).send('Successfully update answer helpful count');
  } catch (err) {
    console.log(err);
    res.status(400).send('Failed updating answer helpful count');
  }
};

const updateAnswerReportStatus = async (req, res) => {
  const { answerId } = req.params;

  try {
    await reportAnswer(answerId);
    res.status(204).send('Successfully update answer reported status');
  } catch (err) {
    console.log(err);
    res.status(400).send('Failed updating answer reported status');
  }
};

const addProductQuestion = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send('Invalid input');
  } else {
    try {
      await postQuestion(req.body);
      res.status(201).send('Successfully posted new question');
    } catch (err) {
      console.log(err);
      res.status(400).send('Failed posting new question');
    }
  }
};

const addProductAnswer = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).send('Invalid input');
  } else {
    try {
      const { questionId } = req.params;
      await postAnswer(questionId, req.body);
      res.status(201).send('Successfully posted new answer');
    } catch (err) {
      console.log(err);
      res.status(400).send('Failed posting new answer');
    }
  }
};

module.exports = {
  getProductQuestionsAndAnswers,
  getAnswerListofQuestion,
  updateQuestionHelpfulFeedback,
  updateAnswerHelpfulFeedback,
  updateAnswerReportStatus,
  addProductQuestion,
  addProductAnswer
};