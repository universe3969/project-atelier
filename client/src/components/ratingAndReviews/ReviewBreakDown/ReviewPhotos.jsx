import React from 'react';
import './ReviewPhotos.scss';
import Modal from '../../reusableComponents/Modal.jsx';

const ReviewPhotos = ({photos, handleImageClick, showModal, set}) => {
  const onClose = () => {
    setShowModal(false);
  };

  const onClick = () => {
    setShowModal(true);
  };

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