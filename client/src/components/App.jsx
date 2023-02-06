import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Overview from './productDetail/Overview.jsx';


const App = () => {
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products/37311')
      .then(({ data }) => setCurrentProduct(data));
  }, []);

  console.log(currentProduct);
  return (
    <div>
      <h3>Project Atelier</h3>
      {currentProduct ? <Overview currentProduct={currentProduct}/> : null}
    </div>
  );
};

export default App;
