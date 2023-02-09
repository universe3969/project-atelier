import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HelpfulActionBar.scss';

const HelpfulActionBar = ({ type, id, helpfulCount, sideButtonText, onHandleSideAction }) => {
  const [buttonText, setButtonText] = useState(sideButtonText);
  const [helpfulnessCount, setHelpfulnessCount] = useState(helpfulCount);

  useEffect(() => {
    if (sideButtonText === 'Report') {
      if (JSON.parse(window.localStorage.getItem(`${type}-reportId-${id}`))) {
        setButtonText('Reported');
      }
    }
  }, []);

  const handleHelpfulClick = () => {
    const isHelpfulClicked = JSON.parse(window.localStorage.getItem(`${type}-helpfulId-${id}`));
    if (!isHelpfulClicked) {
      let url = '';
      if (type === 'question') {
        url = `http://localhost:3000/api/questionsAndAnswers/questions/${id}/helpful`;
      } else if (type === 'answer') {
        url = `http://localhost:3000/api/questionsAndAnswers/answers/${id}/helpful`;
      } else if (type === 'review') {
        url = `http://localhost:3000/api/reviews/${id}/helpful`;
      }
      window.localStorage.setItem(`${type}-helpfulId-${id}`, 'true');
      axios.put(url)
        .then(data => setHelpfulnessCount(prev => prev + 1))
        .catch(err => console.log(err));
    }
  };

  let onSideButtonClick;
  if (sideButtonText === 'Report' || sideButtonText === 'Reported') {
    onSideButtonClick = () => {
      const isReportClicked = JSON.parse(window.localStorage.getItem(`${type}-reportId-${id}`));
      if (!isReportClicked || buttonText === 'Report') {
        let url = '';
        if (type === 'answer') {
          url = `http://localhost:3000/api/questionsAndAnswers/answers/${id}/report`;
        } else if (type === 'review') {
          url = `http://localhost:3000/api/reviews/${id}/report`;
        }
        window.localStorage.setItem(`${type}-reportId-${id}`, 'true');
        axios.put(url)
          .then(data => console.log(data))
          .catch(err => console.log(err));
        setButtonText('Reported');
      }
    };
  } else {
    onSideButtonClick = (id) => {
      onHandleSideAction(id);
    };
  }

  return (
    <div className='helpful-action-bar'>
      <div className='helpful-button'>
        <p>Helpful?</p>
        <a onClick={handleHelpfulClick}><span>Yes</span>{`(${helpfulnessCount})`}</a>
      </div>
      <div className='side-button' onClick={onSideButtonClick}>
        <a>{buttonText}</a>
      </div>
    </div>
  );
};

export default HelpfulActionBar;