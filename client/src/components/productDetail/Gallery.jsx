import React, {useState, useEffect} from 'react';
import './Styles.scss';
import {GoArrowLeft, GoArrowRight, GoTriangleDown, GoTriangleUp} from 'react-icons/go';
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
      <div className="thumbnails-container">
        <GoTriangleUp className="carousel-up" onClick={up}/>
          {thumbnailList}
        <GoTriangleDown className="carousel-down" onClick={down}/>
      </div>
      {isFirst ? null : <GoArrowLeft onClick={previous} className="carousel-left"/>}

      {isLast ? null : <GoArrowRight onClick={next} className="carousel-right"/>}

      <div className="big-thumbnail" style={galleryStyles}>
      </div>

    </div>
  );
}

export default Gallery;