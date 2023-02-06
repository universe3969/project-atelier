import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewBreakDown/ReviewList.jsx';
import RatingList from './RatingBreakDown/RatingList.jsx';
import axios from 'axios';
import './RatingsAndReviews.scss';

const initialStars = {
  5: false,
  4: false,
  3: false,
  2: false,
  1: false,
};

const RatingsAndReviews = ({productId, currentProduct}) => {
  const [ productReviews, setProductReviews ] = useState([]);
  const [ sortBy, setSortBy ] = useState('relevant');
  const [render, setRender] = useState([]);
  const [reviewMetaData, setReviewMetaData] = useState({});
  const [starFilter, setStarFilter] = useState(initialStars);

  // console.log(currentProduct.reviews.results.filter((review) => review.rating === 5));
  useEffect(() => {
    axios.get(`http://localhost:3000/api/reviews/${productId}/${sortBy}`)
      .then(({data}) => {
        let reviews = data.reviews.results;
        let metaData = data.reviewMeta;
        setProductReviews([...reviews]);
        setReviewMetaData({...metaData});
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortBy, render]);

  const handleSortClick = (e) => {
    setSortBy(e.target.value);
  };
  const handleSortByStars = (starNumber) => {
    console.log(starNumber);
    let sortedStarRating = (currentProduct.reviews.results.filter((review) => review.rating === starNumber));
    console.log(sortedStarRating)
    setProductReviews(sortedStarRating);
  };

  return (
    <div className='rating-review-containers'>
      <RatingList reviewMetaData={reviewMetaData} starFilter={starFilter} setStarFilter={setStarFilter} averageRating={currentProduct.avgRating} onSortStarRatingReview={handleSortByStars}/>
      <ReviewList productReviews={productReviews} handleSortClick={handleSortClick} sortBy={sortBy} setRender={setRender} reviewMetaData={reviewMetaData}/>
    </div>

  );
};
export default RatingsAndReviews;