import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Alert from './Alert.jsx';

const App = () => {
  const [productId, setProductId] = useState(3731);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [alertStatus, setAlertStatus] = useState(false);

  let alertBar;
  // let alertBar = <Alert type='error' message='Product not found'/>;
  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${productId}`)
      .then(({ data }) => setCurrentProduct(data))
      .catch(err => {
        alertBar = <Alert type='error' message='Product not found'/>;
        setAlertStatus(true);
      });
  }, [productId]);

  const handleSearch = (searchId) => {
    if (!isNaN(+searchId)) {
      setProductId(searchId);
    } else {
      console.log('invalid product ID');
      alertBar = <Alert type='error' message='Invalid product ID'/>;
      setAlertStatus(true);
    }
  };

  return (
    <div>
      <NavBar onSearch={handleSearch}/>
      {alertStatus && alertBar}
    </div>
  );
};

export default App;
