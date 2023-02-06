import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBar.scss';

const SearchBar = ({ onSearch, className, placeholderText = '', searchByKey }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (searchByKey && term.length >= 3) {
      const timeoutId = setTimeout(function() {
        onSearch(term);
      }, 500);

      return () => {
        clearTimeout(timeoutId);
      };
    } else if (searchByKey && term.length === 0) {
      onSearch('');
    }
  }, [term]);

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