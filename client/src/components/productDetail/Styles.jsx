import React, {useEffect, useState} from 'react';
import {AiOutlineCheckCircle} from 'react-icons/ai';

const Styles = ({styles, styleId, setStyleId, styleName}) => {

  let selectStyle = (event) => {
    setStyleId(+event.target.dataset.style);
  }

  let styleIcons;
  styleIcons = styles.map(style => {
    return (
      <div key={style.style_id}>
        <img
        className="style-icon"
        onClick={selectStyle}
        src={style.photos[0]['url']}
        data-style={style.style_id}
        />
        {styleId === style.style_id ? <AiOutlineCheckCircle /> : null}
      </div>
    )
  })

  return (
    <div className="styles-selection">
      <div className="style-text">STYLE > {styleName}</div>
      <div className="style-icons">
        {styleIcons}
      </div>
    </div>
  );
};

export default Styles;