import React, {useState} from 'react';
import SortBy from './SortBy.jsx';
import Review from './Review.jsx';
import './ReviewList.scss';
import Button from '../../reusableComponents/Button.jsx';
import axios from 'axios';
import ActionButtons from './ActionButtons.jsx';
import Modal from '../../reusableComponents/Modal.jsx';
import AddReviewForm from './AddReviewForm.jsx';

const ReviewList = ({productReviews, handleSortClick, setRender, starFilter, sortBy, productName, reviewMetaData}) => {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imageURL, setImageURL] = useState('');
  const [visible, setVisible] = useState(2);
  const [showMore, setShowMore] = useState(false);

  const handleLoadClick = (action) => {
    if (action === 'more') {
      setVisible((prevValue) => prevValue + 3);
    } else {
      setVisible(3);
    }
  };

  const handleHelpfulClick = (reviewID) => {
    axios.put(`http://localhost:3000/reviews/${reviewID}/helpful`).then(() => {
      console.log('Request for helpful--->');
    }).catch(() => {
      console.log('There was an error');
    });
  };

  const handleReportClick = (reviewID) => {
    axios.put(`http://localhost:3000/reviews/${reviewID}/report`).then(() => {
      console.log('Request for report');
    }).then(() => {
      setRender([]);
    }).catch(() => {
      console.log('There was an error');
    });
  };

  const handlePhotoClick = (e) => {
    if (e.target.src) {
      setImageURL(e.target.src);
      setShowModal(true);
    }
  };

  let totalReviews = [];
  if (productReviews) {
    totalReviews = productReviews.slice(0, visible).map((review, index) => {
      return <Review key={index} review={review} handleReportClick={handleReportClick} handleHelpfulClick={handleHelpfulClick} handlePhotoClick={handlePhotoClick} showModal={showModal} setShowModal={setShowModal}/>;
    });
  }

  const onClose = () => {
    setShowModal(false);
  };

  const onClick = () => {
    setShowModal(true);
  };

  return (
    <div className='review-container'>
      <div>
        <SortBy handleSortClick={handleSortClick} totalReviews={productReviews.length} />
      </div>
      {totalReviews}
      <div className='review-list-buttons'>
        <ActionButtons
          handleLoadClick={handleLoadClick}
          setVisible={setVisible}
          visible={visible}
          setShowMore={setShowMore}
          totalReviews= {productReviews.length}
        />
        {/* <div className='add-review'> */}
        <Button className='secondary' onClick={onClick}>
          ADD A REVIEW +
        </Button>
        {/* </div> */}
      </div>
      {showModal &&
        <Modal className='modal clear' onClose={onClose}>
          <AddReviewForm
            productReviews={productReviews}
            reviewMetaData={reviewMetaData}
            setRender={setRender}
            productName={productName}/>
        </Modal>
      }
    </div>

  );
};
export default ReviewList;