import React, {useState, useEffect} from 'react';
import './Styles.scss';

const ThumbnailList = ({photos}) => {
  // const [currStyle, setCurrStyle] = useState();
  // const [photos, setPhotos] = useState();
  // const [styleName, setStyleName] = useState();
  // const [defaultState, setDefaultState] = useState();
  // const [originalPrice, setOriginalPrice] = useState();

  // useEffect(() => {
  //   setCurrStyle(styles.filter((style) => {
  //     return style.style_id === styleId;
  //   })[0])
  // }, [])

  // console.log(currStyle)

  // useEffect(() => {
  //   if (currStyle) {
  //     setPhotos(currStyle.photos)
  //   }
  // }, [currStyle]);

  // console.log(photos)

  if (photos) {
    photos.map(photo => {
      <img src={photo.thumbnail_url} />
    })
  }

  let index = 0;

  return (
    <div className='thumbnail-list'>
      {photos ? photos.map(photo => {
        return <img className="thumbnail" key={index++} src={photo.thumbnail_url} />
      }) : null
      }
    </div>
  );
}

export default ThumbnailList;