import React from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import './ComfortBar.scss';

const ComfortBar = ({position}) => {
  return (
    <div>
      <div>Comfort</div>
      <div className='comfort-bar-container'/>
      <div className='comfort-triangle' style={{marginLeft: position}}>{IoTriangleSharp()}</div>
      <div className='comfort-bar'/>
      <div className='comfort-bar'/>
      <div className='comfort-bar'/>
      <div className='comfort-bar-traits'>
        <div className='comfort-trait-left'>Poor</div>
        <div className='comfort-trait-middle'>Average</div>
        <div className='comfort-trait-right'>Perfect</div>
      </div>
    </div>
  );
};
export default ComfortBar;