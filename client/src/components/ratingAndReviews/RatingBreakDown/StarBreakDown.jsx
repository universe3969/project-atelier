import React, {useEffect, useState} from 'react';
import Star from './Star.jsx';
import './StarBreakDown.scss';

const StarBreakDown = ({totalVotes, ratings, handleStarClick, starFilter, setStarFilter, onSortStarRatingReview}) => {
  const barDisplays = [];
  console.log(ratings);
  console.log(starFilter);


  for (let i = 5; i > 0; i -= 1) {
    if (ratings[i]) {
      const barWidth = ratings[i] / totalVotes;
      barDisplays.push(
        <Star
          key={i}//12345
          starType={i}//12345
          barWidth={barWidth}//8,12,22/35/66
          starFilter={starFilter}//1;false blah blah
          onSortStarRatingReview={onSortStarRatingReview}
        />
      );
    } else {
      barDisplays.push(
        <Star
          key={i}
          starType={i}
          barWidth="0"
          starFilter={starFilter}
          onSortStarRatingReview={onSortStarRatingReview}
        />
      );
    }
  }

  return (
    <div>
      {barDisplays}
    </div>
  );
};
export default StarBreakDown;