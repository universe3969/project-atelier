import React, { useState, useEffect } from 'react';
import RelatedProducts from './RelatedProducts.jsx';
import YourOutfit from './YourOutfit.jsx';
import axios from 'axios';

const RelatedItemsAndOutfitCreation = ({ currentProductId, product }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/relatedProducts/${currentProductId}`)
      .then(({ data }) => {
        const filteredProducts = [];
        data.forEach(item => {
          if (filteredProducts.every(el => el.info.id !== item.info.id)) {
            filteredProducts.push(item);
          }
        });
        setRelatedProducts(filteredProducts);
      });
  }, []);

  return (
    <div className='products-and-outfits'>
      <div className='related-products'>
        {relatedProducts.length && <RelatedProducts relatedProducts={relatedProducts}/>}
      </div>
      <div className='your-outfit'>
        <YourOutfit
          currentProduct={product}
          productId={currentProductId}
        />
      </div>
    </div>
  );
};

export default RelatedItemsAndOutfitCreation;