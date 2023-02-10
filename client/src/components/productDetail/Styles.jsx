import React, {useEffect, useState} from 'react';
import {AiFillCheckCircle} from 'react-icons/ai';

const Styles = ({styles, styleId, setStyleId, styleName, setCurrIndex}) => {

  let selectStyle = (event) => {
    setStyleId(+event.target.dataset.style);
  };

  let styleIcons;
  styleIcons = styles.map(style => {
    return (
      <div key={style.style_id} className="style-icon-container">
        <img
          className="style-icon"
          onClick={(event) => {
            setCurrIndex(0);
            selectStyle(event);
          }}
          src={style.photos[0]['url']}
          data-style={style.style_id}
        />
        {styleId === style.style_id ? <AiFillCheckCircle className="style-check" /> : null}
      </div>
    );
  });

  return (
    <div className="style-selection-container">
      <div className="style-text">STYLE &gt; {styleName}</div>
      <div className="style-icons-container">
        {styleIcons}
      </div>
    </div>
  );
};

export default Styles;