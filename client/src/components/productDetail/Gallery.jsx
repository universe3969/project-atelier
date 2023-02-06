import React, {useState, useEffect} from 'react';
import './Styles.scss';
import {AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineUp, AiOutlineDown} from 'react-icons/ai';
const Gallery = ({photos}) => {

  const [currIndex, setCurrIndex] = useState(0);

  let thumbnailList = photos.map((photo, index) => {
    return <img
    className={currIndex === index ? "selected-thumbnail" : "thumbnail"}
    src={photo.thumbnail_url}
    key={index}
    onClick={() => {toThumbnail(index)}}
    />
  })


  const toThumbnail = (index) => {
    setCurrIndex(index);
  }
  // had to write css in here because i need access to the url;
  const galleryStyles = {
    width: '800px',
    height: '700px',
    backgroundImage: `url(${photos[currIndex].url})`,
    borderRadius: '10px',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }

  const isFirst = currIndex === 0;
  const isLast = currIndex === photos.length - 1;

  // onclick function for gallery
  const previous = () => {
    const newIndex = isFirst ? null : currIndex - 1;
    setCurrIndex(newIndex);
  }
  const next = () => {
    const newIndex = isLast ? null : currIndex + 1;
    setCurrIndex(newIndex);
  }

  // onclick function for thumbnailList
  const up = () => {
    const newIndex = isFirst ? currIndex : currIndex - 1;
    setCurrIndex(newIndex);
  }
  const down = () => {
    const newIndex = isLast ? currIndex : currIndex + 1;
    setCurrIndex(newIndex);
  }

  return (
    <div className='gallery-container'>

      {isFirst ? null : <AiOutlineArrowLeft onClick={previous} className="carousel-left"/>}

      {isLast ? null : <AiOutlineArrowRight onClick={next} className="carousel-right"/>}

      <div style={galleryStyles}>
        <div className="thumbnails-container">
          <AiOutlineUp className="carousel-up" onClick={up}/>
          {thumbnailList}
          <AiOutlineDown className="carousel-down" onClick={down}/>
        </div>
      </div>

    </div>
  );
}

export default Gallery;