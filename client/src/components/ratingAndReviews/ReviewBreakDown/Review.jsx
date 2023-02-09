import React from 'react';
import StarRating from '../../reusableComponents/StarRating.jsx';
import './Review.scss';
import Recommend from './Recommend.jsx';
import axios from 'axios';
import ReviewPhotos from './ReviewPhotos.jsx';
import Modal from '../../reusableComponents/Modal.jsx';
import HelpfulActionBar from '../../reusableComponents/HelpfulActionBar.jsx';

const Review = ({review, handleReportClick, handleHelpfulClick, handlePhotoClick}) => {

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
      <div className='body'>
        {review.body}
        {review.recommend ? <Recommend/> : null}
        {review.photos.length ? <ReviewPhotos photos={review.photos}/> : null}
        {review.response ? <SellerReply response={review.response}/> : null}
      </div>

      <div className='help-report'>
        <HelpfulActionBar
          type='review'
          id={review.review_id}
          helpfulCount={review.helpfulness}
          sideButtonText='Report'
        />
      </div>
    </div>
  );

};
export default Review;