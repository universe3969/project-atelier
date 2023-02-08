import React from 'react';
import './Characteristics.scss';

const Characteristics = ({ handleChange, selectionNames, charType, charID }) => {

  return (
    <div className="characteristics">
      <div className="selection-type">{charType}</div>
      <label className="selections">
        <span>{selectionNames[0]}</span>
        <div>
          <input
            required
            type="radio"
            name={charType}
            onChange={() => handleChange(1, charID)}
          />
        </div>
      </label>
      <label className="selections">
        <span>{selectionNames[1]}</span>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(2, charID)} />
        </div>
      </label>
      <label className="selections">
        <span>{selectionNames[2]}</span>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(3, charID)} />
        </div>
      </label>
      <label className="selections">
        <span>{selectionNames[3]}</span>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(4, charID)} />
        </div>
      </label>
      <label className="selections">
        <span>{selectionNames[4]}</span>
        <div>
          <input type="radio" name={charType} onChange={() => handleChange(5, charID)} />
        </div>
      </label>
    </div>
  );
};
export default Characteristics;