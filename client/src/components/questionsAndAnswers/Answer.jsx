import React, { useState } from 'react';
import HelpfulActionBar from '../reusableComponents/HelpfulActionBar.jsx';
import Modal from '../reusableComponents/Modal.jsx';
import './Answer.scss';

const Answer = ({ answer }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const id = answer.id || answer.answer_id;
  const { body, helpfulness, answerer_name, date, photos } = answer;

  const renderedUser = answerer_name === 'Seller'
    ? <span style={{ fontWeight: 'bold' }}>{answerer_name}</span>
    : <span>{answerer_name}</span>;

  const formattedDate = new Date(date).toDateString().slice(4);

  let renderedPhotos = null;
  if (photos) {
    renderedPhotos = photos.map((photo, index) => {
      const url = typeof photo === 'object' ? photo.url : photo;
      return (
        <img
          key={`${id}-${index}`}
          src={url}
          onClick={() => {
            setShowImageModal(true);
            setSelectedImage(photo);
          }}
        />
      );
    });
  }

  return (
    <div className='answer'>
      <div className='answer-text'>
        <span>A:</span> {body}
      </div>
      <div className='photos-container'>
        {renderedPhotos}
      </div>
      <div className='action-bar answer'>
        <div className='author'>
          <p className='user'>by {renderedUser},</p>
          <p className='date'>{formattedDate}</p>
        </div>
        <HelpfulActionBar
          id={id}
          helpfulCount={helpfulness}
          sideButtonText='Report'
        />
      </div>
      {showImageModal &&
        <Modal
          className='modal blur'
          onClose={() => setShowImageModal(false)}
        >
          <img src={selectedImage}/>
        </Modal>
      }
    </div>
  );
};

export default Answer;



