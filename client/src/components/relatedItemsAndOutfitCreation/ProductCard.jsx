import React, { useState, useEffect, Fragment } from 'react';
import { MdStarBorder } from 'react-icons/md';
import { MdStar } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import { TiDeleteOutline } from 'react-icons/ti';
import { BsFileEarmarkImageFill } from 'react-icons/bs';
import './ProductCard.scss';
import Button from '../reusableComponents/Button.jsx';
import StarRating from '../reusableComponents/StarRating.jsx';

const ProductCard = ({ type, product, onButtonClick, removedId }) => {
  const [filledButton, setFilledButton] = useState(false);
  let renderCardContent, handleAddProduct;

  if (product) {
    const { info, styles, avgRating } = product;
    const defaultStyle = styles.results
      .find(style => style['default?'] === true) || styles.results[0];
    let { thumbnail_url: url } = defaultStyle.photos[0];

    if (!url) {
      for (let style of styles.results) {
        if (style.photos[0].thumbnail_url) {
          url = style.photos[0].thumbnail_url;
          break;
        }
      }
    }

    let renderedButton;
    let formattedPrice = 0;
    if (+defaultStyle.original_price.slice(info.default_price.length - 2) === 0) {
      formattedPrice = `$${parseInt(defaultStyle.original_price)}`;
    } else {
      formattedPrice = `$${defaultStyle.original_price}`;
    }

    const handleButtonClick = () => {
      if (type === 'relatedProducts') {
        setFilledButton(true);
      }
      onButtonClick(info.id);
    };

    if (type === 'relatedProducts') {
      renderedButton = (
        <Button
          className='secondary active'
          onClick={handleButtonClick}
        >
          {!filledButton
            ? <MdStarBorder className='button-icon'/>
            : <MdStar className='button-icon'/>
          }
        </Button>
      );
    } else {
      renderedButton = (
        <Button
          className='secondary active'
          onClick={handleButtonClick}
        >
          <TiDeleteOutline className='button-icon remove'/>
        </Button>
      );
    }

    renderCardContent = (
      <div className='card'>
        {renderedButton}
        <div className='product-image'>
          {url && <img src={url}/>}
          {!url &&
            <div className='no-image'>
              <div className='no-image-icon'><BsFileEarmarkImageFill/></div>
              <div className='no-image-text'>No Image Available</div>
            </div>
          }
        </div>
        <div className='product-detail'>
          <div className='title'>{info.category.toUpperCase()}</div>
          <div className='product-name'>{info.name}</div>
          <div className='product-price'>{formattedPrice}</div>
          <StarRating rating={avgRating}/>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (type === 'relatedProducts' && product.info.id === removedId) {
      setFilledButton(false);
    }
  }, [removedId]);


  if (type === 'addProduct') {
    handleAddProduct = () => {
      onButtonClick();
    };
  }

  if (type === 'addProduct') {
    renderCardContent = (
      <div className='add-product'>
        <div className='add-sign'>
          <GrAdd/>
        </div>
        <div className='text'>Add to Outfit</div>
      </div>
    );
  }

  return (
    <div className='card-container' onClick={handleAddProduct}>
      {renderCardContent}
    </div>
  );
};

export default ProductCard;