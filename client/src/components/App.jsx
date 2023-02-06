import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItemsAndOutfitCreation from './relatedItemsAndOutfitCreation/RelatedItemsAndOutfitCreation.jsx';

const App = ({ productId }) => {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${productId}`)
      .then(({ data }) => setCurrentProduct(data));
  }, []);

  return (
    <div>
      <h3>Project Atelier</h3>
      {currentProduct &&
        <RelatedItemsAndOutfitCreation
          currentProductId={productId}
          product={currentProduct}
        />
      }
    </div>
  );
};

export default App;
