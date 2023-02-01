import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import RatingsAndReviews from '../components/ratingAndReviews/RatingsAndReviews.jsx';
import SearchBar from '../components/reusableComponents/SearchBar.jsx';

const App = () => {

  const handleSearch = (term) => {
    console.log(term);
  };

  return (
    <div>
      <h3>Project Atelier</h3>
      <RatingsAndReviews/>
    </div>
  );
};

export default App;