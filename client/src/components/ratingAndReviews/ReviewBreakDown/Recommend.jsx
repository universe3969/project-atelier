import React from 'react';
import {BiCheck} from 'react-icons/bi';
import './recommend.scss';

const Recommend = () => {
  return (
    <div className='recommend-container'>
      <div>{BiCheck()}</div>
      <div>I recommend this product.</div>
    </div>
  );
};
export default Recommend;