import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from './Carousel.jsx';
import Modal from '../reusableComponents/Modal.jsx';

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [comparingProducts, setComparingProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addComparingProducts = (productId, action) => {
    // console.log(productId);
    if (action === 'add') {
      comparingProducts.length === 0
        ? setComparingProducts([productId])
        : setComparingProducts(prev => [prev.pop(), productId]);
    } else {
      setComparingProducts(prev => prev.filter(el => el !== productId));
    }
  };

  if (comparingProducts === 2) {
    setShowModal(true);
  }

  console.log(comparingProducts);

  useEffect(() => {
    axios.get('http://localhost:3000/api/relatedProducts/37317')
      .then(({ data }) => setRelatedProducts(data));
  }, []);

  return (
    <div>
      <Carousel items={relatedProducts} onAdd={addComparingProducts}/>
      {showModal &&
        <Modal onClose={() => setShowModal(false)}>

        </Modal>
      }
    </div>
  );
};

export default RelatedProducts;