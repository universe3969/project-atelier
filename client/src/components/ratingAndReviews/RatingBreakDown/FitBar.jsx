import React from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import './FitBar.scss';

const FitBar = ({position}) => {
  return (
    <div>
      <div>Fit</div>
      <div className="fit-bar-container">
        <div className="fit-triangle" style={{ marginLeft: position }}>{IoTriangleSharp()}</div>
        <div className="fit-bar" />
        <div className="fit-bar" />
        <div className="fit-bar" />
      </div>
      <div className="fit-bar-traits">
        <div className="fit-trait-left">Tight</div>
        <div className="fit-trait-left">Perfect</div>
        <div className="fit-trait-left">Loose</div>
      </div>
    </div>
  );
};
export default FitBar;