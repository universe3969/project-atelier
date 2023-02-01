import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import './Carousel.scss';
import ProductCard from './ProductCard.jsx';

const Carousel = ({ items, onAdd }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();
  const itemsPerScreen = useRef(0);

  const onHandleClick = (direction) => {
    const slider = sliderRef.current;
    let width = getComputedStyle(slider).getPropertyValue('--added-Width');
    if (width.includes('px')) {
      width = parseInt(width.slice(0, -2));
    } else {
      width = parseInt(width);
    }

    const cardWidth = sliderRef.current.childNodes[0].getBoundingClientRect().width;
    itemsPerScreen.current = parseInt(getComputedStyle(slider).getPropertyValue('--items-per-screen'));
    const index = itemsPerScreen.current + currentIndex;

    if (direction === 'left') {
      if (index === itemsPerScreen.current) {
        return;
      }
      width += cardWidth;
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'right') {
      if (index === items.length) {
        return;
      }
      width -= cardWidth;
      setCurrentIndex(currentIndex + 1);
    }
    slider.style.setProperty('--added-Width', `${width}px`);
  };

  let renderededItems = [];
  if (items) {
    renderededItems = items.map(item =>
      <ProductCard key={item.info.id} product={item} onAdd={onAdd}/>
    );
  }

  return (
    <div className='carousel-container'>
      {currentIndex !== 0 &&
        <button className='left' onClick={() => onHandleClick('left')}>
          <FiChevronLeft/>
        </button>
      }
      {(currentIndex + itemsPerScreen.current) !== items.length &&
        <button className='right' onClick={() => onHandleClick('right')}>
          <FiChevronRight/>
        </button>
      }
      <div className='carousel-content' ref={sliderRef}>
        {items && renderededItems}
      </div>
    </div>
  );
};

export default Carousel;