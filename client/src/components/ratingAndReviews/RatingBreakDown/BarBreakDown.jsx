import React, {useState, useEffect} from 'react';
import SizeBar from './SizeBar.jsx';
import ComfortBar from './ComfortBar.jsx';
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
  const [triPositions, setTriPositions] = useState({});

  const renderCharacterBars = (currChar) => {
    if (currChar === 'Size') {
      setShowSize(true);
    } else if (currChar === 'Comfort') {
      setShowComfort(true);
    }
  };
  useEffect(() => {
    const currChars = Object.keys(characters); // List of characteristics for product
    if (currChars.length) {
      setTriPositions(pointerCal(characters)); // Set triangle position
      currChars.forEach((char) => {
        renderCharacterBars(char); // Set render state of each characteristic
      });
    }
  }, [characters]);
  return (
    <div className="char-bars-section">
      { showSize ? <SizeBar position={triPositions.Size} /> : null }
      { showComfort ? <ComfortBar position={triPositions.Comfort} /> : null }
    </div>
  );
};
export default BarBreakDown;