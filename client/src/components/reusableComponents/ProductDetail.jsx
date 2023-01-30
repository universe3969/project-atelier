import React from 'react';
import { BsCheck2 } from 'react-icons/bs';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className='product-detail-test'>
      <h4>COMPARING</h4>
      <div className='title'>
        <p>Product Short Name</p>
        <p>Product Short Name</p>
      </div>
      <div className='content-body'>
        <div className='content'>
          <p className='checkmark'><BsCheck2/></p>
          <p className='text'>GMO and Pesticide-free</p>
          <p className='checkmark'><BsCheck2/></p>
        </div>
        <div className='content'>
          <p className='checkmark'><BsCheck2/></p>
          <p className='text'>Made with 100% Genetic Modification</p>
          <p className='checkmark'><BsCheck2/></p>
        </div>
        <div className='content'>
          <p className='checkmark'><BsCheck2/></p>
          <p className='text'>This is made up</p>
          <p className='checkmark'><BsCheck2/></p>
        </div>
        <div className='content'>
          <p className='checkmark'><BsCheck2/></p>
          <p className='text'>It doesn't matter</p>
          <p className='checkmark'><BsCheck2/></p>
        </div>
        <div className='content'>
          <p className='checkmark'><BsCheck2/></p>
          <p className='text'>Feature description</p>
          <p className='checkmark'><BsCheck2/></p>
        </div>
        <div className='content'>
          <p className='checkmark'></p>
          <p className='text'>Uses React Hooks and Redux</p>
          <p className='checkmark'></p>
        </div>
        <div className='content'>
          <p className='checkmark'></p>
          <p className='text'>Angular</p>
          <p className='checkmark'></p>
        </div>
        <div className='content'>
          <p className='checkmark'></p>
          <p className='text'>Some other product comparison metric</p>
          <p className='checkmark'></p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;