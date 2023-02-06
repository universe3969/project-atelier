import React from 'react';
import './NavBar.scss';
import SearchBar from './reusableComponents/SearchBar.jsx';

const NavBar = ({ onSearch }) => {

  return (
    <div className='navbar'>
      <h3 className='logo'>Atelier</h3>
      <SearchBar onSearch={onSearch}/>
    </div>
  );
};

export default NavBar;