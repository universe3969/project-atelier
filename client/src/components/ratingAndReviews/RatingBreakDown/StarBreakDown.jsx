import React, {useEffect, useState} from 'react';
import {BsTags, BsTag} from 'react-icons/bs';
import {FaRegStar} from 'react-icons/fa';
import Star from './Star.jsx';
import './StarBreakDown.scss';

const StarBreakDown = ({totalVotes, ratings, handleStarClick, starFilter, setStarFilter}) => {
  const barDisplays = [];

  for (let i = 5; i > 0; i -= 1) {
    if (ratings[i]) {
      const barWidth = ratings[i] / totalVotes;
      barDisplays.push(
        <Star
          key={i}
          starType={i}
          barWidth={barWidth}
          handleStarClick={handleStarClick} from RatingsReviews
          starFilter={starFilter}
        />
      );
    } else {
      barDisplays.push(
        <Star
          key={i}
          starType={i}
          barWidth="0"
          handleStarClick={handleStarClick}
          starFilter={starFilter}
        />
      );
    }
  }


  const starKeys = Object.keys(starFilter);
  const filterTags = [];
  starKeys.forEach((key) => {
    if (starFilter[key]) {
      filterTags.push(
        <div key={key} onClick={() => handleStarClick(key)} className="tag-container">
          <div className="small-tag">
            <div className="tag">{BsTag()}</div>
            <div className="text">
              <div>{key}</div>
              <div className="text-star">{FaRegStar()}</div>
            </div>
          </div>
        </div>,
      );
    }
  });

  const handleBigTagClick = () => {
    const resetFilter = {};
    for (const key in starFilter) {
      resetFilter[key] = false;
    }
    setStarFilter({ ...starFilter, ...resetFilter });
  };

  return (
    <div className="star-bar-container">
      <div>
        {barDisplays}
      </div>
      { filterTags.length
        ? (
          <div className="star-filter-tags">
            <div className="big-tag" onClick={() => handleBigTagClick()}>{BsTags()}</div>
            <div className="tag-filters">{filterTags.reverse()}</div>
          </div>
        )
        : null }
    </div>
  );
};
export default StarBreakDown;