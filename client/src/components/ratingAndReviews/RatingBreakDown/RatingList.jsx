import React, {useEffect, useState} from 'react';
import StarBreakDown from './StarBreakDown.jsx';
import Recommended from './Recommended.jsx';
import AverageRatingWithStars from './AverageRatingWithStars.jsx';
import BarBreakDown from './BarBreakDown.jsx';
import './RatingList.scss';

let averageRatingCal = (ratings) => {
  let sum = 0;
  let totalVotes = 0;
  for (const key in ratings) {
    sum += Number(key) * ratings[key];
    totalVotes += Number(ratings[key]);
  }
  let averageRatingScore = sum / totalVotes;
  return { averageRatingScore, totalVotes };
};

let recommendPercentCal = (recommended) => {
  return (Number(recommended.true) / (Number(recommended.true) + Number(recommended.false))) * 100;
};

const RatingList = ({reviewMetaData, handleStarClick, starFilter, setStarFilter}) => {
  const [totalVotes, setTotalVotes] = useState(0);
  const [averageRating, setAverageRating] = useState(5);
  const [recommendPercent, setRecommendPercent] = useState(100);
  const [ratings, setRatings] = useState({});
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    if (Object.keys(reviewMetaData).length) {
      let averageRatingCalculated = averageRatingCal(reviewMetaData.ratings);
      setAverageRating(averageRatingCalculated.averageRatingScore);
      setTotalVotes(averageRatingCalculated.totalVotes);
      setRecommendPercent(recommendPercentCal(reviewMetaData.recommended));
      setRatings(reviewMetaData.ratings);
      setCharacters(reviewMetaData.characteristics);
    }
  });

  return (
    <div className='ratings-container'>
      <h4>Ratings and Reviews</h4>
      <AverageRatingWithStars averageRating={averageRating}/>
      <Recommended recommendPercent={recommendPercent}/>
      <StarBreakDown totalVotes={totalVotes} ratings={ratings} handleStarClick={handleStarClick} starFilter={starFilter} setStarFilter={setStarFilter}/>
      <BarBreakDown characters={characters}/>
    </div>
  );
};
export default RatingList;