import React from 'react';
import HelpfulActionBar from './reusableComponents/HelpfulActionBar.jsx';

const App = () => {

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