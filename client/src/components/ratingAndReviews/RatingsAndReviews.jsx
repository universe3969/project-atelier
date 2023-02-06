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

const RatingsAndReviews = ({productId}) => {
  const [ productReviews, setProductReviews ] = useState([]);
  const [ sortBy, setSortBy ] = useState('relevant');
  const [render, setRender] = useState([]);
  const [reviewMetaData, setReviewMetaData] = useState({});
  const [starFilter, setStarFilter] = useState(initialStars);
  const [averageRating, setAverageRating] = useState(5);
  useEffect(() => {
    console.log(sortBy)
    axios.get(`http://localhost:3000/api/reviews/${productId}`, {
      'sortCriteria': sortBy,
    })
      .then(({data}) => {
        console.log(data);
        let reviews = data.reviews.results;
        let metaData = data.reviewMeta;
        let averageR = data.avgRating;
        setProductReviews([...reviews]);
        setReviewMetaData({...metaData});
        setAverageRating(averageR);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortBy, render]);

  // useEffect(() => {
  //   axios.get(`http://localhost:3000/api/reviews/meta/${productId}`, {
  //     params: {
  //       // eslint-disable-next-line camelcase
  //       product_id: productId,
  //     },
  //   })
  //     .then(({data}) => {
  //       console.log(data);
  //       setReviewMetaData(data);
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  // }, [render]);

  const handleSortClick = (e) => {
    setSortBy(e.target.value);
  };

  const handleStarClick = (starType) => {
    setStarFilter({...starFilter, [starType]: !starFilter[starType]});
  };

  return (
    <div className='rating-review-containers'>
      <RatingList reviewMetaData={reviewMetaData} handleStarClick={handleStarClick} starFilter={starFilter} setStarFilter={setStarFilter} averageRating={averageRating}/>
      <ReviewList productReviews={productReviews} handleSortClick={handleSortClick} sortBy={sortBy} setRender={setRender} reviewMetaData={reviewMetaData}/>
    </div>

  );
};
export default RatingsAndReviews;