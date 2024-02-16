// Birds.jsx
import React, { useState } from 'react';
import birdsData from '../data/birdsData';
import Search from './Search';
import { Link } from 'react-router-dom';
// import Card from './Card';

const Birds = () => {
  const [filteredBirds, setFilteredBirds] = useState(birdsData);

  const handleSearch = (query) => {
    const filtered = birdsData.filter(bird =>
      bird.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBirds(filtered);
  };

  return (
    <div>
      <h1>Birds Page</h1>
      <Link to="/">Home</Link>
      {/* <Card></Card> */}
      <Search onSearch={handleSearch} />
      <ul>
        {filteredBirds.map((bird, index) => (
          <li key={index}>{bird.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Birds;
