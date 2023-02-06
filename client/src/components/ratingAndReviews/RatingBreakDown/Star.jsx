import React, {useState, useEffect} from 'react';
import './Star.scss';

const Star = ({starType, barWidth, handleStarClick, starFilter}) => {
  const [isClicked, setIsClicked] = useState(starFilter[starType]);
  const [clickedClass, setClickedClass] = useState('');

  useEffect(() => {
    setIsClicked(starFilter[starType]);
  }, [starFilter]);

  useEffect(() => {
    if (isClicked) {
      setClickedClass('filter-active');
    } else {
      setClickedClass('');
    }
  }, [isClicked]);

  const handleClick = (type) => {
    handleStarClick(type);
  };

  return (
    <div className="star-breakdown-item">
      <div
        onClick={() => handleClick(starType)}
        role="button" tabIndex={0}
        className={'filter-star-button ' + clickedClass}
      >
        <div>
          {starType}
        </div>
        <div>
          Stars
        </div>
      </div>
      <div className="break-down-bar">
        <div className="gray-bar" />
        <div className="green-bar" style={{ width: 244 * barWidth }} />
      </div>
    </div>
  );
};
export default Star;