import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewBreakDown/ReviewList.jsx';
import RatingList from './RatingBreakDown/RatingList.jsx';
import axios from 'axios';
import './RatingsAndReviews.scss';

const REVIEW_URL = '/api/reviews';

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
  const [selectStar, setSelectStar] = useState(0);
  const [allSelectStarSort, setAllSelectStarSort] = useState([]);

  useEffect(() => {
    axios.get(`${REVIEW_URL}/${productId}/${sortBy}`)
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
    let sortedStarRating = (currentProduct.reviews.results.filter((review) => review.rating === starNumber));
    if (starNumber === selectStar) {
      setSelectStar(0);
      setAllSelectStarSort([]);
      setProductReviews(currentProduct.reviews.results);
    } else {
      setSelectStar(starNumber);
      if (selectStar !== 0 && allSelectStarSort.length !== 5 && !allSelectStarSort.includes(starNumber)) {
        setAllSelectStarSort((prev => [...prev, starNumber]));
        setProductReviews((previous => [...previous, ...sortedStarRating]));
      } else {
        setProductReviews(sortedStarRating);
      }
    }
  };

  return (
    <div className='rating-review-wrapper'>
      <h3 className='header'>RATINGS & REVIEWS</h3>
      <div className='rating-review-containers'>
        <RatingList reviewMetaData={reviewMetaData} starFilter={starFilter} setStarFilter={setStarFilter} averageRating={currentProduct.avgRating} onSortStarRatingReview={handleSortByStars} productReviews={productReviews}/>
        <ReviewList productReviews={productReviews} handleSortClick={handleSortClick} sortBy={sortBy} setRender={setRender} reviewMetaData={reviewMetaData}/>
      </div>
    </div>
  );
};
export default RatingsAndReviews;