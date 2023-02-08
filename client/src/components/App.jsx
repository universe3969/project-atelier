import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import NavBar from './NavBar.jsx';
import Alert from './Alert.jsx';
import Overview from './productDetail/Overview.jsx';
import RelatedItemsAndOutfitCreation from './relatedItemsAndOutfitCreation/RelatedItemsAndOutfitCreation.jsx';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';

const App = () => {
  const [productId, setProductId] = useState(37317);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${productId}`)
      .then(({ data }) => setCurrentProduct(data))
      .catch(err =>
        setAlert({ type: 'error', message: 'Product Not Found'})
      );
  }, [productId]);

  const handleSearch = (searchId) => {
    if (!isNaN(+searchId)) {
      setProductId(searchId);
      setAlert(null);
    } else {
      setAlert({ type: 'error', message: 'Invalid Product ID'});
    }
  };
  return (
    <div className='app-container'>
      <NavBar onSearch={handleSearch}/>
      {alert && <Alert type={alert.type} message={alert.message}/>}
      <div className='announcement'><span>APPLY FOR OUR MASTERCARD</span><span className='dash'>&#8212;</span><span className='offer'>GET UP TO 30% OFF YOUR NEXT ORDER</span><span className='dash'>&#8212;</span><span className='highlight'>SPRING 2023 COLLECTON</span></div>
      <div className='app-modules'>
        {currentProduct &&
          <Fragment>
            <Overview currentProduct={currentProduct}/>
            <RelatedItemsAndOutfitCreation
              currentProductId={productId}
              product={currentProduct}
              onChangeProduct={handleSearch}
            />
            <QuestionsAndAnswers
              productId={productId}
              productName={currentProduct.info.name}
            />
          </Fragment>
        }
      </div>
    </div>
  );
};

export default App;
