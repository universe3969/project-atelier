import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HelpfulActionBar.scss';

const HelpfulActionBar = ({ id, helpfulCount, onUpdateHelpful, sideButtonText, onHandleSideAction }) => {
  const [buttonText, setButtonText] = useState(sideButtonText);
  const [helpfulnessCount, setHelpfulnessCount] = useState(helpfulCount);

  useEffect(() => {
    if (sideButtonText === 'Report') {
      if (JSON.parse(window.localStorage.getItem(`reportId-${id}`))) {
        setButtonText('Reported');
      }
    }
  }, []);

  const handleHelpfulClick = () => {
    const isHelpfulClicked = JSON.parse(window.localStorage.getItem(`helpfulId-${id}`));
    if (!isHelpfulClicked) {
      window.localStorage.setItem(`helpfulId-${id}`, 'true');
      axios.put(`http://localhost:3000/api/questionsAndAnswers/answers/${id}/helpful`)
        .then(data => setHelpfulnessCount(prev => prev + 1))
        .catch(err => console.log(err));
    }
  };

  let onSideButtonClick;
  if (sideButtonText === 'Report' || sideButtonText === 'Reported') {
    onSideButtonClick = () => {
      const isReportClicked = JSON.parse(window.localStorage.getItem(`reportId-${id}`));
      if (!isReportClicked || buttonText === 'Report') {
        window.localStorage.setItem(`reportId-${id}`, 'true');
        axios.put(`http://localhost:3000/api/questionsAndAnswers/answers/${id}/report`)
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