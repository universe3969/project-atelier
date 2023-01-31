import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBar.scss';

const SearchBar = ({ onSearch, className, placeholderText = '' }) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(term);
    setTerm('');
  };

  return (
    <div className={className}>
      <form className='search-bar' onSubmit={handleSubmit}>
        <input
          className='search-input'
          placeholder={placeholderText}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <AiOutlineSearch className='search-icon'/>
      </form>
    </div>

  );
};

export default SearchBar;