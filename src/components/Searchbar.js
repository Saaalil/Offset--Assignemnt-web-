import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    // console.log('Search term:', event.target.value); // debug
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  // const handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     // maybe add enter key functionality later?
  //   }
  // };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search by project name or Vintage year..."
          value={searchTerm}
          onChange={handleInputChange}
          // onKeyPress={handleKeyPress} 
          className="search-input"
        />
        {searchTerm && (
          <button 
            onClick={clearSearch}
            className="clear-button"
            title="Clear search"
          >
            ×
          </button>
        )}
      </div>
      {/* Removed the "Searching for:" display as requested */}
      {/* {searchTerm && (
        <div className="search-info">
          Searching for: <strong>{searchTerm}</strong>
        </div>
      )} */}
    </div>
  );
}

export default SearchBar;