import React from 'React';
import { useState } from 'React';

const SortBy = ({handleSortClick, totalReviews}) => {

  const handleClick = (e) => {
    handleSortClick(e);
  };
  return (
    <div className='review-sort'>
      <span>
        {totalReviews}, sorted by
        <select name='sort-by' className='sort-option'onChange={(e) => handleClick(e)}>
          <option value='relevant'>relevance</option>
          <option value='newest'>newest</option>
          <option value='helpful'>helpful</option>
        </select>
      </span>
    </div>
  );
};
export default SortBy;