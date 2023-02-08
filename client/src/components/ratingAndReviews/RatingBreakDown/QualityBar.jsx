import React from 'react';
import { IoTriangleSharp } from 'react-icons/io5';
import './QualityBar.scss';

const qualityBar = ({position}) => {
  return (
    <div>
      <div>Quality</div>
      <div className="quality-bar-container">
        <div className="quality-triangle" style={{ marginLeft: position }}>{IoTriangleSharp()}</div>
        <div className="quality-bar" />
        <div className="quality-bar" />
        <div className="quality-bar" />
      </div>
      <div className="quality-bar-traits">
        <div className="quality-trait-left">Poor</div>
        <div className="quality-trait-middle">Average</div>
        <div className="quality-trait-right">Perfect</div>
      </div>
    </div>
  );
};
export default qualityBar;