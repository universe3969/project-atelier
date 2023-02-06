import React, { useState, useEffect } from 'react';
import './relatedItemsAndOutfitCreation.scss';
import Carousel from './Carousel.jsx';

const YourOutfit = ({ currentProduct, productId }) => {
  const [currentOutfit, setCurrentOutfit] = useState([]);

  useEffect(() => {
    const outfit = JSON.parse(window.localStorage.getItem('yourOutfit'));
    if (outfit) {
      setCurrentOutfit(outfit);
    }
  }, []);

  const handleAddProduct = () => {
    const outfit = JSON.parse(window.localStorage.getItem('yourOutfit'));
    if (outfit && outfit.find(product => product.info.id === productId)) {
      return;
    } else if (!outfit || (outfit && !outfit.find(product => product.info.id === productId))) {
      const yourOutfit = [...currentOutfit, currentProduct];
      setCurrentOutfit(yourOutfit);
      window.localStorage.setItem('yourOutfit', JSON.stringify(yourOutfit));
    }
  };

  const handleRemoveProduct = (id) => {
    const yourOutfit = currentOutfit.filter(item => item.info.id !== id);
    setCurrentOutfit(yourOutfit);
    window.localStorage.setItem('yourOutfit', JSON.stringify(yourOutfit));
  };

  return (
    <div>
      <h3 className='header'>YOUR OUTFIT</h3>
      <Carousel
        type='yourOutfit'
        items={currentOutfit}
        onButtonClick={handleRemoveProduct}
        onAddProduct={handleAddProduct}
      />
    </div>
  );

};

export default YourOutfit;