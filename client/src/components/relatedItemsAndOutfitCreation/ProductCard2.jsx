import React, { useState, useRef } from 'react';
import './ProductCard2.scss';

const ProductCard2 = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();

  const { avgRating, info, styles } = product;
  const defaultStyle = styles.results
    .find(style => style['default?'] === true) || styles.results[0];
  const images = defaultStyle.photos.map(img => img.thumbnail_url);

  const onHandleClick = (direction) => {
    const slider = sliderRef.current;
    let width = getComputedStyle(slider).getPropertyValue('--added-Width');
    if (width.includes('px')) {
      width = parseInt(width.slice(0, -2));
    } else {
      width = parseInt(width);
    }

    const cardWidth = sliderRef.current.childNodes[0].getBoundingClientRect().width;
    // itemsPerScreen.current = parseInt(getComputedStyle(slider).getPropertyValue('--items-per-screen'));
    const index = currentIndex + 1;

    if (direction === 'left') {
      if (index === itemsPerScreen.current) {
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
    slider.style.setProperty('--added-Width', `${width}px`);
  };

  let renderedImages = [];
  if (images.length) {
    renderededImages = images.map(url =>
      <div>
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
    <div>
      <div className='carousel-container'>
        {/* {showNavigation &&
          currentIndex !== 0 &&
          <button className='left' onClick={() => onHandleClick('left')}>
            <FiChevronLeft/>
          </button>
        }
        {showNavigation &&
          (currentIndex + itemsPerScreen.current) !== itemsLength &&
          <button className='right' onClick={() => onHandleClick('right')}>
            <FiChevronRight/>
          </button>
        } */}
        <div className='carousel-content' ref={sliderRef}>
          {/* {type === 'yourOutfit' && <ProductCard type='addProduct' onButtonClick={onAddProduct}/>} */}
          {images && renderedImages}
        </div>
      </div>
      <div className='product-showcase-detail'>

      </div>
    </div>
  );
};

export default ProductCard2;