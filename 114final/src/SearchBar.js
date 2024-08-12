import React, { useState } from 'react';
import './App.css'; // Import the CSS file here

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Handle the search logic here
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className="search-bar-input"
      />
      <button onClick={handleSearch} className="search-bar-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
