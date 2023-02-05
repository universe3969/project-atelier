import React from 'react';
import './Recommended.scss';

const Recommended = ({recommendPercent}) => {
  let approxRecommendPercent = Math.round(recommendPercent * 10) / 10;
  return (
    <div className='recommend-percent'>{approxRecommendPercent} % of reviews recommend this product</div>
  );
};
export default Recommended;