import React, {useState} from 'react';
import SortBy from './SortBy.jsx';
import Review from './Review.jsx';
import './ReviewList.scss';
import Button from '../../reusableComponents/Button.jsx';
import axios from 'axios';
import ActionButtons from './ActionButtons.jsx';
import Modal from '../../reusableComponents/Modal.jsx';
import AddReviewForm from './AddReviewForm.jsx';

const ReviewList = ({productReviews, handleSortClick, starFilter, sortBy, productName, reviewMetaData, setRefresh}) => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [visible, setVisible] = useState(2);

  const handleLoadClick = (action) => {
    if (action === 'more') {
      setVisible((prevValue) => prevValue + 2);
    } else {
      if (action === 'less') {
        setVisible(2);
      }
    }
  };

  let totalReviews = [];
  if (productReviews) {
    totalReviews = productReviews.slice(0, visible).map((review, index) => {
      return <Review key={index} review={review}/>;
    });
  }

  const onClose = () => {
    setShowModal(false);
  };

  const onClick = () => {
    setShowModal(true);
  };

  return (
    <div className='all-reviews'>
      <div>
        <SortBy handleSortClick={handleSortClick} totalReviews={productReviews.length} />
      </div>
      <div className='review-container'>
        {totalReviews}
      </div>
      <div className='review-list-buttons'>
        <ActionButtons
          handleLoadClick={handleLoadClick}
          setVisible={setVisible}
          visible={visible}
          totalReviews= {productReviews.length}
        />
        <Button className='secondary review' onClick={onClick}>
          ADD A REVIEW +
        </Button>
      </div>
      {showModal &&
        <Modal className='modal blur' onClose={onClose}>
          <AddReviewForm
            productReviews={productReviews}
            reviewMetaData={reviewMetaData}
            productName={productName}
            onClose={() => setShowModal(false)}
            setRefresh={setRefresh}
          />
        </Modal>
      }
    </div>
  );
};
export default ReviewList;