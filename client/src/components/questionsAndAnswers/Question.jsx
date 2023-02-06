import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Answer from './Answer.jsx';
import Form from './Form.jsx';
import HelpfulActionBar from '../reusableComponents/HelpfulActionBar.jsx';
import Button from '../reusableComponents/Button.jsx';
import Modal from '../reusableComponents/Modal.jsx';
import './Question.scss';

const Question = ({ question, productName }) => {
// console.log(question);
  const [sortedAnswers, setSortedAnswers] = useState(null);
  const [loadedAnswersCount, setLoadedAnswersCount] = useState(2);
  const [loadMoreAnswers, setLoadMoreAnswers] = useState(true);
  const [showModal, setShowModal] = useState(false);
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

  const handleLoadMoreAnswers = () => {
    if (loadMoreAnswers) {
      setLoadedAnswersCount(sortedAnswers.length);
      setLoadMoreAnswers(false);
      if (sortedAnswers.length > 3) {
        document.querySelector('.answer-content').style.overflowY = 'scroll';
      }
    } else {
      setLoadedAnswersCount(2);
      setLoadMoreAnswers(true);
      document.querySelector('.answer-content').style.overflowY = 'hidden';
    }
  };

  const handleSubmitAnswer = (answerPost) => {
    axios.post(`http://localhost:3000/api/questions/${question_id}/answers/new`, answerPost)
      .then(data => console.log(data))
      .catch(err => console.log(err));
    setShowModal(false);
  };

  return (
    <div className='question'>
      <div className='question-content'>
        <div className='question-text'>Q: {question_body}</div>
        <div className='action-bar'>
          <HelpfulActionBar
            id={question_id}
            helpfulCount={question_helpfulness}
            sideButtonText='Add Answer'
            onHandleSideAction={() => setShowModal(true)}
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
          {loadMoreAnswers ? 'LOAD MORE ANSWERS' : 'COLLAPSE ANSWERS'}
        </Button>
      }
      {showModal &&
        <Modal
          className='modal blur'
          onClose={() => setShowModal(false)}
        >
          <Form
            type='answer'
            title='Submit your Answer'
            subtitle={`${productName}: ${question_body}`}
            onSubmit={handleSubmitAnswer}
          />
        </Modal>
      }
    </div>
  );
};

export default Question;

