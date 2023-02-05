import React from 'react';

const ReviewPhotos = ({photos, handleImageClick}) => {

  let photo = photos.map((photo) => (
    <img key={photo.id} alt='img' src={photo.url} className='review-photo'/>
  ));
  return (
    <div onClick={(e) => handleImageClick(e)}>{photo}</div>
  );
};
export default ReviewPhotos;