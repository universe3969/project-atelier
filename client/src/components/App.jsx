import React from 'react';
import Thumbnail from './productDetail/Thumbnail.jsx';
import ThumbnailList from './productDetail/ThumbnailList.jsx';

const App = () => {
  return (
    <div>
      <h3>Project Atelier</h3>
      <ThumbnailList />
      <Thumbnail />
    </div>
  );
};

export default App;