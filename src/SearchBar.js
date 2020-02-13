import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const onSearchValueChange = (e) => setSearchValue(e.target.value);
  const onSearchButtonClick = () => onSearch(searchValue);

  return (
    <div>
      <input
        type="text"
        placeholder="Search value"
        value={searchValue}
        onChange={onSearchValueChange}
      />

      <button onClick={onSearchButtonClick}>
        Search
      </button>
    </div>
  )
};

export default SearchBar;
