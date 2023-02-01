import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
import Review from './Review.jsx';
import Button from '../reusableComponents/Button.jsx';
import './ReviewList.scss';
const ReviewList = () => {

  const [reviews, setReviews] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('relevant');

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews', {
      headers: {
        'Authorization': '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'
      },
      params: {
        // eslint-disable-next-line camelcase
        product_id: 37315,
        sort: sortCriteria
      }
    })
      .then(({ data }) => {
        console.log(data.results);
        setReviews(data.results);
      })
      .catch(err => console.log(err));
  }, [sortCriteria]);
  let addReviews = [];
  if (reviews) {
    addReviews = reviews.map((review, index) => {
      return <Review key={index} review={review}/>;
    });
  }

  return (
    <div className='review-container'>
      <div>
        <span>
        248 reviews, sorted by
          <select name='sort-by' className='sort-option'onChange={(e) => setSortCriteria(e.target.value)}>
            <option value='relevant'>relevance</option>
            <option value='newest'>newest</option>
            <option value='helpful'>helpful</option>
          </select>
        </span>
        <Button className='secondary'>ADD A REVIEW +</Button>
      </div>
      {reviews && addReviews}
    </div>

  );
};
export default ReviewList;