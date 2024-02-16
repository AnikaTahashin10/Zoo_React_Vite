import React, { useState } from 'react';
import birdsData from '../data/birdsData';
import Search from './Search';
import Card from './Card';

const Birds = () => {
  const [filteredBirds, setFilteredBirds] = useState(birdsData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterBirds(query);
  };

  const filterBirds = (query) => {
    const filtered = birdsData.filter((bird) =>
      bird.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBirds(filtered);
  };


  return (
    <div>
      <h1 style={{textAlign: "center"}}>Birds Page</h1>
      <Search onSearch={handleSearch} value={searchQuery} />
      <div className="card-container">
        {filteredBirds.map((bird, index) => (
          <Card key={index} name={bird.name} close={() => alert('Close clicked!')} />
        ))}
      </div>
    </div>
  );
};

export default Birds;
