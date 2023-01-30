import React from 'react';
import { MdStarBorder } from 'react-icons/md';
import { MdStar } from 'react-icons/md';
import './StarRating.scss';

const StarRating = ({ rating, className }) => {

  const renderStars = [];

  if (rating) {
    for (let i = 0; i < 5; i++) {
      let displayWidth = 0;

      if (rating >= 1) {
        displayWidth = 100;
      } else if (rating > 0 && rating < 1) {
        displayWidth = rating * 100;
      } else {
        displayWidth = 0;
      }

      renderStars.push(
        <div key={i} className='outer-star'>
          <MdStarBorder/>
          <div className='inner-star' style={{ width: `${displayWidth}%` }}>
            <MdStar/>
          </div>
        </div>
      );
      rating--;
    }
  }

  return (
    <div className={className}>
      {rating && renderStars}
    </div>
  );
};

export default StarRating;