import React, { useState, useEffect } from 'react';
import './PhotoReview.scss';
import Button from '../../reusableComponents/Button.jsx';

const PhotoReview = ({ photos, setPhotos }) => {

  let [key, setKey] = useState(-1);
  let [image, setImage] = useState([]);

  let updatePhotos = (e) => {
    let i = e.target.getAttribute('name');
    let temp = [...photos];
    temp[i] = e.target.value;
    setPhotos(temp);
  };

  let addPhotoHandler = (e) => {
    e.preventDefault();
    if (image.length < 5) {
      let temp = [...image,
        <input
          type="text"
          className="image"
          placeholder="photo url"
          key={key} name={key}
          onChange={updatePhotos}
        />];
      setImage(temp);
    }
  };

  useEffect(() => {
    setKey(key + 1);
  }, [image]);

  return (
    <div className="photosWrapper">
      <p className='write-review-title'>Add image urls</p>
      {image.length > 0 &&
        <div className='upload-image-urls'>
          {image}
        </div>
      }
      <Button
        onClick={addPhotoHandler}
        className='primary add-image'
      >
        +
      </Button>
    </div>
  );
};

export default PhotoReview;