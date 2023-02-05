import React from 'react';
import StarRating from '../../reusableComponents/StarRating.jsx';
import './AverageRatingWithStars.scss';


const AverageRatingWithStars = ({averageRating}) => {

  let approx = Math.round(averageRating * 10) / 10;
  return (
    <div>
      <div className='average-star'>
        <div className='average-rating'>{approx}</div>
        <div className='star-rating'>
          <StarRating rating={approx}/>
        </div>
      </div>
    </div>
  );
};
export default AverageRatingWithStars;