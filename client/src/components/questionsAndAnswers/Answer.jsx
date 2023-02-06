import React, { useState } from 'react';
import axios from 'axios';
import HelpfulActionBar from '../reusableComponents/HelpfulActionBar.jsx';
import Modal from '../reusableComponents/Modal.jsx';
import './Answer.scss';

const Answer = ({ answer }) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const { id, body, helpfulness, answerer_name, date, photos } = answer;
  const [helpfulnessCount, setHelpfulnessCount] = useState(helpfulness);

  const renderedUser = answerer_name === 'Seller'
    ? <span style={{ fontWeight: 'bold' }}>{answerer_name}</span>
    : <span>{answerer_name}</span>;

  const formattedDate = new Date(date).toDateString().slice(4);

  const updateAnswerHelpfulness = (isHelpful) => {
    if (isHelpful) {
      axios.put(`http://localhost:3000/api/questionsAndAnswers/answers/${id}/helpful`)
        .then(data => setHelpfulnessCount(prev => prev + 1))
        .catch(err => console.log(err));
    }
  };

  const handleSideAction = (isCalled) => {
    if (isCalled) {
      axios.put(`http://localhost:3000/api/questionsAndAnswers/answers/${id}/report`)
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }
  };

  let renderedPhotos = null;
  if (photos) {
    renderedPhotos = photos.map((photo, index) =>
      <img
        key={`${id}-${index}`}
        src={photo}
        onClick={() => {
          setShowImageModal(true);
          setSelectedImage(photo);
        }}
      />
    );
  }

  return (
    <div className='answer'>
      <div className='answer-text'>
        <span>A:</span> {body}
      </div>
      <div className='photos-container'>
        {renderedPhotos}
      </div>
      <div className='action-bar'>
        <div className='author'>
          <p className='user'>by {renderedUser},</p>
          <p className='date'>{formattedDate}</p>
        </div>
        <HelpfulActionBar
          id={id}
          helpfulCount={helpfulnessCount}
          onUpdateHelpful={updateAnswerHelpfulness}
          sideButtonText='Report'
          onHandleSideAction={handleSideAction}
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



