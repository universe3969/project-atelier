import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';
import StarRating from './reusableComponents/StarRating.jsx';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:3000/api/products/37316')
      .then(({ data }) => setCurrentProduct(data));
  }, []);

console.log(currentProduct)

  return (
    <div>
      <h3>Project Atelier</h3>
      {currentProduct &&
        <QuestionsAndAnswers
          productId='37316'
          productName={currentProduct.info.name}
        />
      }
      <StarRating rating='4.3'/>
    </div>
  );
};

export default App;
