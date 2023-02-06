import React from 'react';
import axios from 'axios';
import HelpfulActionBar from '../reusableComponents/HelpfulActionBar.jsx';
import './Answer.scss';

const Answer = ({ answer }) => {
  const { id, body, helpfulness, answerer_name, date } = answer;

  const renderedUser = answerer_name === 'Seller'
    ? <span style={{ fontWeight: 'bold' }}>{answerer_name}</span>
    : <span>{answerer_name}</span>;

  const formattedDate = new Date(date).toDateString().slice(4);

  const updateAnswerHelpfulness = (isHelpful) => {
    if (isHelpful) {
      axios.get(`http://localhost:3000/api/questionsAndAnswers/${id}/helpful`)
        .then()
        .catch(err => console.log(err));
    }
  };

  const handleSideAction = (isCalled) => {
    if (isCalled) {
      axios.get(`http://localhost:3000/api/questionsAndAnswers/${id}/report`)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
  };

  return (
    <div className='answer'>
      <div className='answer-text'>
        <span>A:</span> {body}
      </div>
      <div className='action-bar'>
        <div className='author'>
          <p className='user'>by {renderedUser},</p>
          <p className='date'>{formattedDate}</p>
        </div>
        <HelpfulActionBar
          id={id}
          helpfulCount={helpfulness}
          onUpdateHelpful={updateAnswerHelpfulness}
          sideButtonText='Report'
          onHandleSideAction={handleSideAction}
        />
      </div>
    </div>
  );
};

export default Answer;



