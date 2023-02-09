import React from 'react';
import { GrAdd } from 'react-icons/gr';
import './AddProductCard.scss';

const AddProductCard = ({ onAddProduct }) => {

  return (
    <div className='card-wrapper'>
      <div
        className='add-product'
        onClick={onAddProduct}
        data-testid='add-product-function'
      >
        <div className='add-sign'>
          <GrAdd/>
        </div>
        <div className='text'>Add to Outfit</div>
      </div>
    </div>
  );
};

export default AddProductCard;