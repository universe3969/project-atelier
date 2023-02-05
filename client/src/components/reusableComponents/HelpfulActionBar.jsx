import React, { useState, useEffect } from 'react';
import './HelpfulActionBar.scss';

const HelpfulActionBar = ({ id, helpfulCount, onUpdateHelpful, sideButtonText, onHandleSideAction }) => {
  const [buttonText, setButtonText] = useState(sideButtonText);

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
      onUpdateHelpful(true);
    }
  };

  let onSideButtonClick;
  if (sideButtonText === 'Report') {
    onSideButtonClick = () => {
      const isReportClicked = JSON.parse(window.localStorage.getItem(`reportId-${id}`));
      if (!isReportClicked) {
        window.localStorage.setItem(`reportId-${id}`, 'true');
        onHandleSideAction(true);
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
        <a onClick={handleHelpfulClick}><span>Yes</span>{`(${helpfulCount})`}</a>
      </div>
      <div className='side-button' onClick={onSideButtonClick}>
        <a>{buttonText}</a>
      </div>
    </div>
  );
};

export default HelpfulActionBar;