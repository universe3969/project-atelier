import axios from 'axios';
import React, { useState, useEffect } from 'react';
import RatingsAndReviews from '../components/ratingAndReviews/RatingsAndReviews.jsx';
import SearchBar from '../components/reusableComponents/SearchBar.jsx';
import Modal from '../components/reusableComponents/Modal.jsx';
import Button from '../components/reusableComponents/Button.jsx';

const App = () => {
  //const [showModal, setShowModal] = useState(false);


  const handleSearch = (term) => {
    console.log(term);
  };
  // const onClose = () => {
  //   setShowModal(false);
  // };

  // const onClick = () => {
  //   setShowModal(true);
  // };

  return (
    <div>
      <h3>Project Atelier</h3>
      {/* <Button onClick={onClick}>OpenModal</Button>
      {showModal && <Modal className='modal clear'onClose={onClose}>Randomdbferufhjefkhei</Modal>} */}
      <RatingsAndReviews/>
    </div>
  );
};

export default App;