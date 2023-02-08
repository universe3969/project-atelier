import React, { useState, useEffect } from 'react';
import './PhotoReview.scss';
let PhotoReview = ({ photos, setPhotos }) => {

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
    let temp = [...image, <input type="text" className="image" placeholder="photo url" key={key} name={key} onChange={updatePhotos}></input>];
    setImage(temp);
  };

  useEffect(() => {
    setKey(key + 1);
  }, [image]);

  return (
    <div className="photosWrapper">
      <p>Add image urls</p>
      {image}
      <button onClick={addPhotoHandler}>+</button>
    </div>
  );
};

export default PhotoReview;