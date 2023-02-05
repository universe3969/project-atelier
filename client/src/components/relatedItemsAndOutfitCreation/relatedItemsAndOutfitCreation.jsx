import React, { useState, useEffect } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import axios from 'axios';

const RelatedItemsAndOutfitCreation = ({ currentProduct }) => {
  const [products, setProducts] = useState([]);
  const [currentOutfit, setCurrentOutfit] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/relatedProducts/37317')
      .then(({ data }) => {
        setProducts(data);
      });
  }, []);

  const handleAddProduct = () => {
    // TODO: Add current product
    console.log('add new outfit');
  };

  const handleRemoveProduct = (productId) => {
    setCurrentOutfit(prev => prev.filter(item => item.info.id !== productId));
  };

  return (
    <div className='products-and-outfits'>
      <div className='related-products'>
        {products.length && <RelatedProducts relatedProducts={products}/>}
      </div>
      <div className='your-outfit'>
        <YourOutfit
          outfits={currentOutfit}
          onRemoveProduct={handleRemoveProduct}
          onAddProduct={handleAddProduct}
        />
      </div>
    </div>
  );
};

export default RelatedItemsAndOutfitCreation;