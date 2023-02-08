import React, { useState, useEffect } from 'react';
import Carousel from './Carousel.jsx';
import Modal from '../reusableComponents/Modal.jsx';
import CompareProductsCard from './CompareProductsCard.jsx';
import './RelatedItemsAndOutfitCreation.scss';

const RelatedProducts = ({ relatedProducts }) => {
  const [comparingProducts, setComparingProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [removedId, setRemovedId] = useState(0);

  useEffect(() => {
    if (comparingProducts.length === 2) {
      setShowModal(true);
    }
  }, [comparingProducts]);

  const addComparingProducts = (productId) => {
    const productToCompare = relatedProducts.find(el => el.info.id === productId);
    setComparingProducts([relatedProducts[0], productToCompare]);
  };

  const handleModalClose = () => {
    setRemovedId(comparingProducts[1].info.id);
    setShowModal(false);
    setComparingProducts(prev => [prev[0]]);
  };

  return (
    <div>
      <h3 className='header'>RELATED PRODUCTS</h3>
      <Carousel
        type='relatedProducts'
        items={relatedProducts}
        onButtonClick={addComparingProducts}
        removedId={removedId}
      />
      {showModal &&
        <Modal className='modal clear' onClose={handleModalClose}>
          <CompareProductsCard comparingProducts={comparingProducts}/>
        </Modal>
      }
    </div>
  );
};

export default RelatedProducts;