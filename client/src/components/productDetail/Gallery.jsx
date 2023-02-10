import React, {useState, useEffect} from 'react';
import './Styles.scss';
import {GoArrowLeft, GoArrowRight, GoTriangleDown, GoTriangleUp} from 'react-icons/go';
const Gallery = ({photos, isZoomed, setIsZoomed, currIndex, setCurrIndex}) => {

  const [style, setStyle] = useState({});
  const handleMouseMove = (event) => {

    const x = (event.clientX - event.target.offsetLeft);
    const y = (event.clientY - event.target.offsetTop);
    setStyle({
      transform: 'scale(2)',
      transformOrigin: `${x}px ${y}px`,
      width: '1000px',
      height: '700px',
      cursor: 'zoom-out'
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'scale(1)',
      transformOrigin: 'center'
    });
  };

  let thumbnailList = photos.map((photo, index) => {
    return (<img
      className={ currIndex === index ? 'selected-thumbnail' : 'thumbnail' }
      src={photo.thumbnail_url}
      key={index}
      onClick={() => toThumbnail(index) }
    />);
  });

  const toThumbnail = (index) => {
    setCurrIndex(index);
  };

  // had to write css in here because i need access to the url;
  const isFirst = currIndex === 0;
  const isLast = currIndex === photos.length - 1;

  // onclick function for gallery
  const previous = () => {
    const newIndex = isFirst ? null : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const next = () => {
    const newIndex = isLast ? null : currIndex + 1;
    setCurrIndex(newIndex);
  };

  // onclick function for thumbnailList
  const up = () => {
    const newIndex = isFirst ? currIndex : currIndex - 1;
    setCurrIndex(newIndex);
  };

  const down = () => {
    const newIndex = isLast ? currIndex : currIndex + 1;
    setCurrIndex(newIndex);
  };

  const handleExpand = () => {
    setIsZoomed(!isZoomed);
  };

  useEffect(() => {
    isZoomed
      ? setStyle({
        width: '1200px',
        height: '700px',
        cursor: 'zoom-out'
      })
      : setStyle({
        cursor: 'zoom-in'
      });
  }, [isZoomed]);


  return (
    <div className='gallery-container'>
      <div className="thumbnail-list-container">
        <GoTriangleUp className="carousel-up" onClick={up}/>
        <div className="thumbnails-container">
          {thumbnailList}
        </div>
        <GoTriangleDown className="carousel-down" onClick={down}/>
      </div>
      {isFirst || isZoomed ? null : <GoArrowLeft onClick={previous} className="carousel-left"/>}
      <div className="big-thumbnail-container">
        <img className={ !isZoomed ? 'big-thumbnail' : 'big-thumbnail big-thumbnail-zoomed' } style={style} src={photos[currIndex].url} onClick={handleExpand} onMouseMove={isZoomed ? handleMouseMove : null} onMouseLeave={isZoomed ? handleMouseLeave : null}/>
      </div>

      {isLast || isZoomed ? null : <GoArrowRight onClick={next} className="carousel-right"/>}
    </div>
  );
};

export default Gallery;