import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItemsAndOutfitCreation from './relatedItemsAndOutfitCreation/RelatedItemsAndOutfitCreation.jsx';
import ProductCard2 from './relatedItemsAndOutfitCreation/ProductCard2.jsx';

const App = () => {
  const [productId, setProductId] = useState(37313);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${productId}`)
      .then(({ data }) => setCurrentProduct(data));
  }, []);

  return (
    <div>
      <h3>Project Atelier</h3>
      {/* {currentProduct &&
        <RelatedItemsAndOutfitCreation
          currentProductId={productId}
          product={currentProduct}
        />
      } */}
      {currentProduct && <ProductCard2 product={currentProduct}/>}
    </div>
  );
};

export default App;
