import React, { useState } from 'react';
import Weather from './component/weather/weather';
import SearchBar from './component/search/searchmenu';

const App: React.FC = () => {
  const [city, setCity] = useState('');

  const handleSearch = (city: string) => {
    setCity(city);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Weather city={city} />
    </div>
  );
};

export default App;