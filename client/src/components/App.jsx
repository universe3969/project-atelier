import React from 'react';
import HelpfulActionBar from './reusableComponents/HelpfulActionBar.jsx';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    axios.get('/api/products/37311')
      .then(data => setCurrentProduct(data));
  });

  return (
    <div>
      <h3>Project Atelier</h3>
      <HelpfulActionBar
        helpfulCount='3'
        sideButtonText='Report'
        sideButtonAction={() => console.log('report this')}
      />
    </div>
  );
};

export default App;
