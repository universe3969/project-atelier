import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';
import HelpfulActionBar from '../reusableComponents/HelpfulActionBar.jsx';
import './Question.scss';
import Button from '../reusableComponents/Button.jsx';

const Question = ({ question }) => {
// console.log(question);
  const [sortedAnswers, setSortedAnswers] = useState(null);
  const [loadedAnswersCount, setLoadedAnswersCount] = useState(2);
  const [loadMoreAnswer, setLoadMoreAnswer] = useState(true);
  const { question_id, question_body, answers, question_helpfulness } = question;

  useEffect(() => {
    if (Object.keys(answers).length) {
      let sorted = Object.values(answers).sort((a, b) => b.helpfulness - a.helpfulness);
      let sellerAnswers = sorted.filter(answer => answer.answerer_name === 'Seller') || [];
      sorted = sellerAnswers.concat(sorted.filter(answer => answer.answerer_name !== 'Seller'));
      setSortedAnswers(sorted);
    }
  }, []);

  let renderedAnswers;
  if (sortedAnswers) {
    const loadingAnswer = sortedAnswers.slice(0, loadedAnswersCount);
    renderedAnswers = loadingAnswer.map(answer =>
      <Answer key={answer.id} answer={answer}/>
    );
  }

  const updateQuestionHelpfulness = (isHelpful) => {
    if (isHelpful) {
      axios.get(`http://localhost:3000/api/questionsAndAnswers/${question_id}/helpful`)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
  };

  const handleLoadMoreAnswers = () => {
    if (loadMoreAnswer) {
      setLoadedAnswersCount(sortedAnswers.length);
      setLoadMoreAnswer(false);
      if (sortedAnswers.length > 3) {
        document.querySelector('.answer-content').style.overflowY = 'scroll';
      }
    } else {
      setLoadedAnswersCount(2);
      setLoadMoreAnswer(true);
      document.querySelector('.answer-content').style.overflowY = 'hidden';
    }
  };

  return (
    <div className='question'>
      <div className='question-content'>
        <div className='question-text'>Q: {question_body}</div>
        <div className='action-bar'>
          <HelpfulActionBar
            id={question_id}
            helpfulCount={question_helpfulness}
            onUpdateHelpful={updateQuestionHelpfulness}
            sideButtonText='Add Answer'
          />
        </div>
      </div>
      <div className='answer-content'>
        {renderedAnswers}
      </div>
      {sortedAnswers && sortedAnswers.length > 2 &&
        <Button
          className='secondary'
          onClick={handleLoadMoreAnswers}
        >
          {loadMoreAnswer ? 'LOAD MORE ANSWERS' : 'COLLAPSE ANSWERS'}
        </Button>
      }
    </div>
  );
};

export default Question;

