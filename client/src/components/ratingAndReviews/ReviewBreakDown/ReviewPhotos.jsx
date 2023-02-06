import React from 'react';
import './ReviewPhotos.scss';

const ReviewPhotos = ({photos, handleImageClick}) => {

  let photo = photos.map((photo) => (
    <img key={photo.id} alt='img' src={photo.url} className='review-photo'/>
  ));
  return (
    <div
      className='photos-container'
      onClick={(e) => handleImageClick(e)}
    >
      {photo}
    </div>
  );
};
export default ReviewPhotos;