const {
  getQuestions,
  updateQuestionHelpfulCount,
  updateAnswerHelpfulCount,
  reportAnswer
} = require('../api');

const getProductQuestionsAndAnswers = async (req, res) => {
  const { productId } = req.params;
  console.log(productId);


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

module.exports = {
  getProductQuestionsAndAnswers,
  updateQuestionHelpfulFeedback,
  updateAnswerHelpfulFeedback,
  updateAnswerReportStatus
};