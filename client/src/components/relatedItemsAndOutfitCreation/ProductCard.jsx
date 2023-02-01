import React, { useState } from 'react';
import { MdStarBorder } from 'react-icons/md';
import { MdStar } from 'react-icons/md';
import './ProductCard.scss';
import Button from '../reusableComponents/Button.jsx';
import StarRating from '../reusableComponents/StarRating.jsx';

const ProductCard = ({ product, onAdd }) => {
  const [filledButton, setFilledButton] = useState(false);
  const { info, styles, avgRating } = product;
  const { url } = styles[0].results[0].photos[0];

  let formattedPrice = 0;
  if (+info.default_price.slice(info.default_price.length - 2) === 0) {
    formattedPrice = parseInt(info.default_price);
  } else {
    formattedPrice = info.default_price;
  }

  const handleButtonClick = () => {
    if (filledButton) {
      onAdd(info.id, 'remove');
    } else {
      onAdd(info.id, 'add');
    }
    setFilledButton(!filledButton);
  };

  return (
    <div className='card-container'>
      <div className='card'>
        <Button
          className='secondary active'
          onClick={handleButtonClick}
        >
          {!filledButton
            ? <MdStarBorder className='button-icon'/>
            : <MdStar className='button-icon'/>
          }
        </Button>
        <div className='product-image'>
          <img src={url}/>
        </div>
        <div className='product-detail'>
          <div className='title'>{info.category.toUpperCase()}</div>
          <div className='product-name'>{info.name}</div>
          <div className='product-price'>${formattedPrice}</div>
          <StarRating rating={avgRating}/>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;