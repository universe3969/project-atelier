import React from 'react';
import StarRating from './reusableComponents/StarRating.jsx';

const App = () => {
  return (
    <div>
      <h3>Project Atelier</h3>
      <div>
        <StarRating rating='2.5' className='my-star'/>
      </div>
    </div>
  );
};

export default App;