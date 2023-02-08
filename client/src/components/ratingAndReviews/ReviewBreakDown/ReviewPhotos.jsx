import React, { useState } from 'react';
import './ReviewPhotos.scss';
import Modal from '../../reusableComponents/Modal.jsx';

const ReviewPhotos = ({photos}) => {
  const [showModal, setShowModal] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const handleShowModal = (e) => {
    setShowModal(true);
    setImageUrl(e.target.src);
  };

  let photo = photos.map((photo) => (
    <img onClick={handleShowModal}key={photo.id} alt='img' src={photo.url} className='review-photo'/>
  ));
  return (
    <div className='photos-container'>
      {photo}
      {showModal && <Modal onClose={() => setShowModal(false)}className='modal blur'>
        <img className='image-url' src={imageUrl}/>
      </Modal>}
    </div>
  );
};
export default ReviewPhotos;