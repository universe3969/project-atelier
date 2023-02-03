import React, {useEffect, useState} from 'react';


const Styles = ({styles, setStyleId}) => {

  let styleIcons;
  styleIcons = styles.map(style => {
    return <img className="style-icon" key={style.style_id} src={style.photos[0]['url']}/>
  })

  return (
    <div className="styles-selection">
      <div className="style-text">STYLE > SELECTED STYLE</div>
      <div className="style-icons">
        {styleIcons}
      </div>
    </div>
  );
};

export default Styles;