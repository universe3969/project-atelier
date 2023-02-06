import React, {useState} from 'react';
import Button from '../../reusableComponents/Button.jsx';

const ActionButtons = ({handleLoadClick, setShowMore, totalReviews, visible}) => {
  const [moreItems, setMoreItems] = useState(true);
  const [lessItems, setLessItems] = useState(false);


  const showMoreClick = () => {
    if (visible >= totalReviews) {
      setMoreItems(false);
      setLessItems(true);
    } else {
      handleLoadClick('more');
    }
  };

  const showLessClick = () => {
    if (visible >= totalReviews) {
      setMoreItems(true);
      setLessItems(false);
      handleLoadClick('less');
    }
  };

  return (
    <div className="action-buttons-container">
      {moreItems ? (
        <Button className='secondary' type="button" onClick={showMoreClick}>
          <div className="more-text">SHOW MORE</div>
        </Button>
      ) : null}
      {lessItems ? (
        <Button className='secondary' type="button" onClick={showLessClick}>
          <div className="more-text">SHOW LESS</div>
        </Button>
      ) : null }
    </div>
  );
};
export default ActionButtons;