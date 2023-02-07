import React, { useState, useRef } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import './ProductCard2.scss';

const ProductCard2 = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();

  const { avgRating, info, styles } = product;
  const defaultStyle = styles.results
    .find(style => style['default?'] === true) || styles.results[0];
  // const defaultStyle = styles.results[1];
  const images = defaultStyle.photos.map(img => img.thumbnail_url);

  const onHandleClick = (direction) => {
    const slider = sliderRef.current;
    let width = getComputedStyle(slider).getPropertyValue('--added-Single-Width');
    if (width.includes('px')) {
      width = parseInt(width.slice(0, -2));
    } else {
      width = parseInt(width);
    }

    const cardWidth = sliderRef.current.childNodes[0].getBoundingClientRect().width;
    // itemsPerScreen.current = parseInt(getComputedStyle(slider).getPropertyValue('--items-per-screen'));
    const index = currentIndex + 1;

    if (direction === 'left') {
      if (index === 1) {
        return;
      }
      width += cardWidth;
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right') {
      if (index === sliderRef.current.childNodes.length) {
        return;
      }
      width -= cardWidth;
      setCurrentIndex(currentIndex + 1);
    }
    slider.style.setProperty('--added-Single-Width', `${width}px`);
  };

  let renderedImages = [];
  if (images.length) {
    renderedImages = images.map(url =>
      <div key={url}>
        <img src={url}/>
      </div>
      // <ProductCard
      //   key={item.info.id}
      //   type={type}
      //   product={item}
      //   onButtonClick={onButtonClick}
      //   removedId={removedId}
      // />
    );
  }

  return (
    <div className='product-slideshow-container'>
      <div className=''>
        {currentIndex !== 0 &&
          <button className='left' onClick={() => onHandleClick('left')}>
            <FiChevronLeft/>
          </button>
        }
        {(currentIndex + 1) !== images.length &&
          <button className='right' onClick={() => onHandleClick('right')}>
            <FiChevronRight/>
          </button>
        }
        <div className='slideshow-content' ref={sliderRef}>
          {images && renderedImages}
        </div>
      </div>
      <div className='product-card-detail'>

      </div>
    </div>
  );
};

export default ProductCard2;