import React, {useState, useEffect} from 'react';
import SizeBar from './SizeBar.jsx';
import ComfortBar from './ComfortBar.jsx';
import FitBar from './FitBar.jsx';
import './BarBreakDown.scss';

let pointerCal = (characters) => {
  let positions = {};
  let keyChars = Object.keys(characters);
  keyChars.forEach((char) => {
    positions[char] = (characters[char].value / 5) * 285;
  });
  return positions;
};

const BarBreakDown = ({characters}) => {
  const [showComfort, setShowComfort] = useState(false);
  const [showSize, setShowSize] = useState(false);
  const [showFit, setShowFit] = useState(false);
  const [pointerPosition, setpointerPosition] = useState({});

  const renderCharacterBars = (currChar) => {
    if (currChar === 'Size') {
      setShowSize(true);
    } else if (currChar === 'Comfort') {
      setShowComfort(true);
    } else if (currChar === 'Fit') {
      setShowFit(true);
    }
  };
  useEffect(() => {
    const currChars = Object.keys(characters);
    if (currChars.length) {
      setpointerPosition(pointerCal(characters));
      currChars.forEach((char) => {
        renderCharacterBars(char);
      });
    }
  }, [characters]);
  return (
    <div className="char-bars-section">
      { showSize ? <SizeBar position={pointerPosition.Size} /> : null }
      { showComfort ? <ComfortBar position={pointerPosition.Comfort} /> : null }
      { showFit ? <FitBar position={pointerPosition.Fit} /> : null }
    </div>
  );
};
export default BarBreakDown;