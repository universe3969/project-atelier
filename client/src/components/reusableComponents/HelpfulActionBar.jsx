import React, { useState } from 'react';
import './HelpfulActionBar.scss';

const HelpfulActionBar = ({ helpfulCount, onUpdateHelpful, sideButtonText, sideButtonAction }) => {
  const [isHelpfulClicked, setIsHelpfulClicked] = useState(false);

  const handleHelpfulClick = () => {
    if (!isHelpfulClicked) {
      onUpdateHelpful();
      setIsHelpfulClicked(true);
    }
  };

  return (
    <div className='helpful-action-bar'>
      <div className='helpful-button'>
        <p>Helpful?</p>
        <a onClick={handleHelpfulClick}><span>Yes</span>{`(${helpfulCount})`}</a>
      </div>
      <div className='side-button' onClick={sideButtonAction}>
        <a>{sideButtonText}</a>
      </div>
    </div>
  );
};

export default HelpfulActionBar;