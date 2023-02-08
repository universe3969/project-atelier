import React from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import './LengthBar.scss';

const LengthBar = ({position}) => {
  return (
    <div>
      <div>Length</div>
      <div className="length-bar-container">
        <div className="length-triangle" style={{ marginLeft: position }}>{IoTriangleSharp()}</div>
        <div className="length-bar" />
        <div className="length-bar" />
        <div className="length-bar" />
      </div>
      <div className="length-bar-traits">
        <div className="length-trait-left">Short</div>
        <div className="length-trait-middle">Perfect</div>
        <div className="length-trait-right">Long</div>
      </div>
    </div>
  );
};
export default LengthBar;