import React, {useState, useEffect} from 'react';
import StarRating from '../reusableComponents/StarRating.jsx';

export default function ProductInfo ({productName, category, defaultPrice, salesPrice, avgRating}) {

  return (
    <div className="product-info">
      <div className="overview-review-container">
        <div className="overview-rating"><StarRating rating={avgRating}/></div>
        <div className="read-reviews">read all reviews</div>
      </div>
      <div className="product-category">{category}</div>
      <h2 className="product-name">{productName}</h2>
      <div className="price">
        {salesPrice ? <div>
            <div style={{color: "red"}}>{salesPrice}</div>
            <div style={{textDecoration: 'line-through'}}>{defaultPrice}</div>
          </div>
        : <div className="default-price">{defaultPrice}</div>}
      </div>
    </div>
  );
}