import React, { useState, useEffect } from 'react';
import Overview from './productDetail/Overview.jsx';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    axios.get('/api/products/37311')
      .then(data => setCurrentProduct(data));
  });
  return (
    <div>
      <h3>Project Atelier</h3>
      <Overview />
    </div>
  );
};

export default App;