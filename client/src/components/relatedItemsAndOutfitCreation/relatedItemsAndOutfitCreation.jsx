import React, { useState, useEffect } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import axios from 'axios';

const RelatedItemsAndOutfitCreation = ({ currentProductId, product }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/relatedProducts/${currentProductId}`)
      .then(({ data }) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className='products-and-outfits'>
      <div className='related-products'>
        {products.length && <RelatedProducts relatedProducts={products}/>}
      </div>
      <div className='your-outfit'>
        <YourOutfit
          // outfits={currentOutfit}
          currentProduct={product}
          productId={currentProductId}
          // onRemoveProduct={handleRemoveProduct}
          // onAddProduct={handleAddProduct}
        />
      </div>
    </div>
  );
};

export default RelatedItemsAndOutfitCreation;