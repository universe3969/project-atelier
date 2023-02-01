import React from 'react';
import StarRating from '../reusableComponents/StarRating.jsx';
import './Review.scss';

const Review = ({review}) => {
  console.log(review);
  const dateString = `${review.date}`;

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  let date = formatDate(dateString);

  return (

    <div className='individual-review'>
      <div>
        <StarRating rating={review.rating}/>
        <span className='name-date'>{review.reviewer_name}, {date} </span>
      </div>
      <div className='summary'>{review.summary}</div>
      <div className='body'>{review.body}</div>
      <div className='help-report'>Helpful? {review.helpfulness}  |  Report</div>
    </div>
  );

};
export default Review;