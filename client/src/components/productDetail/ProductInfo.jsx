import React, {useState, useEffect} from 'react';
import StarRating from '../reusableComponents/StarRating.jsx';

export default function ProductInfo ({productName, category, defaultPrice, salesPrice}) {

  return (
    <div className="product-info">
      <div></div>
      <div>{category}</div>
      <h2>{productName}</h2>
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