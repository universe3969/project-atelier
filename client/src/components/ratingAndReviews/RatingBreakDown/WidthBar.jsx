import React from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import './WidthBar.scss';

const WidthBar = ({position}) => {
  return (
    <div>
      <div>Width</div>
      <div className="width-bar-container">
        <div className="width-triangle" style={{ marginLeft: position }}>{IoTriangleSharp()}</div>
        <div className="width-bar" />
        <div className="width-bar" />
        <div className="width-bar" />
      </div>
      <div className="width-bar-traits">
        <div className="width-trait-left">Narrow</div>
        <div className="width-trait-middle">Perfect</div>
        <div className="width-trait-right">Wide</div>
      </div>
    </div>
  );
};
export default WidthBar;