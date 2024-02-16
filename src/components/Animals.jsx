// Animals.jsx
import React, { useState } from 'react';
import animalsData from '../data/animalsData';
import Search from './Search';
import { Link } from 'react-router-dom';
import Card from './Card';

const Animals = () => {
  const [filteredAnimals, setFilteredAnimals] = useState(animalsData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    filterAnimals(query);
  };

  const filterAnimals = (query) => {
    const filtered = animalsData.filter((animal) =>
      animal.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAnimals(filtered);
  };

 

  return (
    <div>
      <h1>Animals Page</h1>
      <Link to="/">Home</Link>
      <Search onSearch={handleSearch} value={searchQuery} />
      <div className="card-container">
        {filteredAnimals.map((animal, index) => (
          <Card key={index} name={animal.name} close={() => alert("Close clicked!")} />
        ))}
      </div>
    </div>
  );
};

export default Animals;
