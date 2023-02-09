import React, {useEffect, useState} from 'react';
import Star from './Star.jsx';

const StarBreakDown = ({totalVotes, starFilter, setStarFilter, onSortStarRatingReview, productReviews}) => {

  let totalStarRating = [];
  productReviews.map((review) => totalStarRating.push(review.rating));

  let container5 = [];
  let container4 = [];
  let container3 = [];
  let container2 = [];
  let container1 = [];

  for (let i = 0; i < totalStarRating.length; i++) {

    if (totalStarRating[i] === 5) {
      container5.push(totalStarRating[i]);
    }
    if (totalStarRating[i] === 4) {
      container4.push(totalStarRating[i]);
    }
    if (totalStarRating[i] === 3) {
      container3.push(totalStarRating[i]);
    }
    if (totalStarRating[i] === 2) {
      container2.push(totalStarRating[i]);
    }
    if (totalStarRating[i] === 1) {
      container1.push(totalStarRating[i]);
    }
  }

  let ratingsArr = {5: `${container5.length}`, 4: `${container4.length}`, 3: `${container3.length}`, 2: `${container2.length}`, 1: `${container1.length}`};
  const barDisplays = [];
  for (let i = 5; i > 0; i -= 1) {
    if (ratingsArr[i]) {
      const barWidth = ratingsArr[i] / totalStarRating.length;
      barDisplays.push(
        <Star
          key={i}
          starType={i}
          barWidth={barWidth}
          starFilter={starFilter}
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