import React, {useState, useEffect} from 'react';

export default function ProductInfo ({productName, category, defaultPrice}) {

  return (
    <div className="product-info">
      <div>{category}</div>
      <h2>{productName}</h2>
      <div>{defaultPrice}</div>
    </div>
  );
}