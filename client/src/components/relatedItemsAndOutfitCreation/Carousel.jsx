import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import './Carousel.scss';
import ProductCard from './ProductCard.jsx';
import AddProductCard from './AddProductCard.jsx';

const Carousel = ({ items, removedId, type, onButtonClick, onAddProduct, onChangeProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const [itemsPerScreen, setItemsPerScreen] = useState(null);
  const sliderRef = useRef();

  const itemsLength = type === 'yourOutfit' ? items.length + 1 : items.length;

  useEffect(() => {
    if (sliderRef.current) {
      setItemsPerScreen(parseInt(getComputedStyle(sliderRef.current).getPropertyValue('--items-per-screen')));
    }
    if (itemsPerScreen && itemsLength > itemsPerScreen + 1) {
      setShowNavigation(true);
    } else {
      setShowNavigation(false);
    }
  }, [items, sliderRef.current]);

  const onHandleClick = (direction) => {
    const slider = sliderRef.current;
    let width = getComputedStyle(slider).getPropertyValue('--added-Width');
    if (width.includes('px')) {
      width = parseInt(width.slice(0, -2));
    } else {
      width = parseInt(width);
    }

    const cardWidth = sliderRef.current.childNodes[0].getBoundingClientRect().width;
    const index = itemsPerScreen + currentIndex;

    if (direction === 'left') {
      if (index === itemsPerScreen) {
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

  let renderededItems = [];
  if (items.length) {
    renderededItems = items.map(item =>
      <ProductCard
        key={item.info.id}
        type={type}
        product={item}
        onButtonClick={onButtonClick}
        removedId={removedId}
        onChangeProduct={onChangeProduct}
      />
    );
  }

  let addToCardStyle = items.length ? { height: 'auto' } : null;

  return (
    <div className='carousel-container' data-testid='carousel-test'>
      {showNavigation &&
        currentIndex !== 0 &&
        <button className='left' onClick={() => onHandleClick('left')}>
          <FiChevronLeft/>
        </button>
      }
      {showNavigation &&
        (currentIndex + itemsPerScreen) !== itemsLength &&
        <button className='right' onClick={() => onHandleClick('right')}>
          <FiChevronRight/>
        </button>
      }
      <div className='carousel-content' ref={sliderRef}>
        {type === 'yourOutfit' &&
          <AddProductCard
            className={addToCardStyle}
            onAddProduct={onAddProduct}
          />
        }
        {items && renderededItems}
      </div>
    </div>
  );
};

export default Carousel;