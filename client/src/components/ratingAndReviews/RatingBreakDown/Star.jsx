import React, {useState, useEffect} from 'react';
import './Star.scss';

const Star = ({starType, barWidth, starFilter, onSortStarRatingReview}) => {
  const handleClickStarRating = () => {
    onSortStarRatingReview(starType);
  };
  return (
    <div className="star-breakdown-item">
      <div onClick={handleClickStarRating} role="button" className={'filter-star-button '}>
        <div>
          {starType}
        </div>
        <div>
          Stars
        </div>
      </div>
      <div className="break-down-bar">
        <div className="gray-bar" />
        <div className="green-bar" style={{ width: `${240 * barWidth}px` }} />
      </div>
    </div>
  );
};
export default Star;