import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';

const App = () => {
  const [currentProduct, setCurrentProduct] = useState(null);
  useEffect(() => {
    axios.get('http://localhost:3000/api/products/37316')
      .then(({ data }) => setCurrentProduct(data));
  }, []);

  return (
    <div>
      <h3>Project Atelier</h3>
      {currentProduct &&
        <QuestionsAndAnswers
          productId='37316'
          productName={currentProduct.info.name}
        />
      }
    </div>
  );
};

export default App;
