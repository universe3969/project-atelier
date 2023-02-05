import React from 'react';
import './relatedItemsAndOutfitCreation.scss';
import Carousel from './Carousel.jsx';

const YourOutfit = ({ outfits, onRemoveProduct, onAddProduct }) => {

  return (
    <div>
      <h3 className='header'>YOUR OUTFIT</h3>
      <Carousel
        type='yourOutfit'
        items={outfits}
        onButtonClick={onRemoveProduct}
        onAddProduct={onAddProduct}
      />
    </div>
  );

};

export default YourOutfit;