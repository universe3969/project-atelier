import React, {useState} from 'react';
import {RiShieldCheckLine} from 'react-icons/ri';
import './Helpful.scss';

const HelpfulButton = ({helpfulness, handleHelpfulClick, reviewID}) => {
  const [count, setCount] = useState(helpfulness);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    console.log('I am clicked');
    setCount((previousCount) => previousCount + 1);
    setIsClicked(true);
    handleHelpfulClick(reviewID);
  };

  return (
    <span className='helpful'>
      <span>Helpful?</span>
      <button onClick={!isClicked ? handleClick : null} className={!isClicked ? '' : 'helpful-active'}>
        <div className='yes-button'>Yes</div>
        <div>{RiShieldCheckLine}</div>
      </button>
      <span>{`(${count})`}</span>
    </span>
  );
};
export default HelpfulButton;