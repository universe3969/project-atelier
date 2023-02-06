import React from 'react';
import StarRating from '../../reusableComponents/StarRating.jsx';
import './Review.scss';
import HelpfulButton from './HelpfulButton.jsx';
import Recommend from './Recommend.jsx';
import Report from './Report.jsx';
import axios from 'axios';
import ReviewPhotos from './ReviewPhotos.jsx';

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
        {review.photos.length ? <ReviewPhotos photos={review.photos} handlePhotoClick={handlePhotoClick}/> : null}
        {review.response ? <SellerReply response={review.response}/> : null}
      </div>

      <div className='help-report'>

        <HelpfulButton helpfulness={review.helpfulness}handleHelpfulClick={handleHelpfulClick} reviewID={review.review_id}/>
      </div>
      <Report reviewID={review.review_id} handleReportClick={handleReportClick}/>
    </div>
  );

};
export default Review;