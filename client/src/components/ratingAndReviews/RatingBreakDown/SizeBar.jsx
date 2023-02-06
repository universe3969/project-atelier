import React from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import './SizeBar.scss';

const SizeBar = ({position}) => {
  return (
    <div>
      <div>Size</div>
      <div className="size-bar-container">
        <div className="size-triangle" style={{ marginLeft: position }}>{IoTriangleSharp()}</div>
        <div className="size-bar" />
        <div className="size-bar" />
        <div className="size-bar" />
      </div>
      <div className="size-bar-traits">
        <div className="size-trait-left">Small</div>
        <div className="size-trait-middle">Perfect</div>
        <div className="size-trait-right">Large</div>
      </div>
    </div>
  );
};
export default SizeBar;