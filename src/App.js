import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const App = () => {
  const [searchResults, setSearchResult] = useState([]);
  const search = async (searchValue) => {
    try {
      const response = await axios.get(`https://some-api.com/${searchValue}`);
      setSearchResult(response);
    } catch (error) {
      console.error('Error fetching search result', error);
    }
  };
  return (
    <div className="App">
      <SearchBar onSearch={search} />

      <div>
        {
          searchResults.map((result) => (
            <div key={result.id}>
              {result.text}
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
