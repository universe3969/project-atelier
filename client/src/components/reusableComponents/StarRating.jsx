import React, { useState } from 'react';
import { MdStarBorder } from 'react-icons/md';
import { MdStar } from 'react-icons/md';
import './StarRating.scss';

const StarRating = ({ rating, className, onRating }) => {
  const [currentRating, setCurrentRating] = useState(+rating);
  const renderStars = [];

  let handleRating;
  if (onRating) {
    handleRating = (event) => {
      if (event.target.tagName !== 'path') {
        setCurrentRating(+event.target.id + 1);
        onRating(+event.target.id + 1);
      }
    };
  } else {
    handleRating = () => {};
  }

  if (currentRating !== undefined) {
    let starRating = currentRating;
    for (let i = 0; i < 5; i++) {
      let displayWidth = 0;

      if (starRating >= 1) {
        displayWidth = 100;
      } else if (starRating > 0 && starRating < 1) {
        displayWidth = starRating * 100;
      } else {
        displayWidth = 0;
      }

      renderStars.push(
        <div key={i} className='outer-star'>
          <MdStarBorder id={i} onClick={handleRating}/>
          <div className='inner-star' style={{ width: `${displayWidth}%` }}>
            <MdStar id={i} onClick={handleRating}/>
          </div>
        </div>
      );
      starRating--;
    }
  }

  let starRatingText = null;
  if (onRating && currentRating > 0) {
    switch (currentRating) {
    case 1:
      starRatingText = <span>Poor</span>;
      break;
    case 2:
      starRatingText = <span>Fair</span>;
      break;
    case 3:
      starRatingText = <span>Average</span>;
      break;
    case 4:
      starRatingText = <span>Good</span>;
      break;
    case 5:
      starRatingText = <span>Great</span>;
      break;
    default:
      break;
    }
  }

  return (
    <div className={className}>
      {currentRating !== undefined && renderStars}
      {starRatingText}
    </div>
  );
};

export default StarRating;