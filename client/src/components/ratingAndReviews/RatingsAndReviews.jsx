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

const RatingsAndReviews = ({productName}) => {
  const [ productReviews, setProductReviews ] = useState([]);
  const [ sortBy, setSortBy ] = useState('relevance');
  const [render, setRender] = useState([]);
  const [reviewMetaData, setReviewMetaData] = useState({});
  const [starFilter, setStarFilter] = useState(initialStars);
  useEffect(() => {
    axios.get('http://localhost:3000/reviews', {
      params: {
        // eslint-disable-next-line camelcase
        product_id: 37315,
        sort: sortBy,
        count: 200,
      },
    })
      .then(({data}) => {
        let reviews = data.results;
        console.log(reviews);
        setProductReviews([...reviews]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortBy, render]);

  useEffect(() => {
    axios.get('http://localhost:3000/reviews/meta', {
      params: {
        // eslint-disable-next-line camelcase
        product_id: 37315,
      },
    })
      .then(({data}) => {
        console.log(data);
        setReviewMetaData(data);
      }).catch((err) => {
        console.log(err);
      });
  }, [render]);

  const handleSortClick = (e) => {
    setSortBy(e.target.value);
  };

  const handleStarClick = (starType) => {
    setStarFilter({...starFilter, [starType]: !starFilter[starType]});
  };

  return (
    <div className='rating-review-containers'>
      <RatingList reviewMetaData={reviewMetaData} handleStarClick={handleStarClick} starFilter={starFilter} setStarFilter={setStarFilter} />
      <ReviewList productReviews={productReviews} handleSortClick={handleSortClick} sortBy={sortBy} setRender={setRender} reviewMetaData={reviewMetaData} productName={productName}/>
    </div>

  );
};
export default RatingsAndReviews;