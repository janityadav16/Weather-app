import React, { useState } from 'react';

interface SearchBarProps {
    onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        onSearch(city);
    };

    return (
        <div>
            <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            < button onClick={handleSearch} > Search Value </button>
        </div>
    );
};

export default SearchBar;