import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import './Carousel.scss';
import ProductCard from './ProductCard.jsx';

const Carousel = ({ items, onButtonClick, removedId, type, onAddProduct }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef();
  const itemsPerScreen = useRef(0);

  const itemsLength = type === 'yourOutfit' ? items.length + 1 : items.length;
console.log
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
      />
    );
  }

  let showNavigation = false;
  if (type !== 'yourOutfit') {
    showNavigation = true;
  } else {
    // if (itemsLength !== 1) {
    //   showNavigation = true;
    // }
    if (itemsLength > 3) {
      showNavigation = true;
    }
  }

  return (
    <div className='carousel-container'>
      {showNavigation &&
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
      }
      <div className='carousel-content' ref={sliderRef}>
        {type === 'yourOutfit' && <ProductCard type='addProduct' onButtonClick={onAddProduct}/>}
        {items && renderededItems}
      </div>
    </div>
  );
};

export default Carousel;