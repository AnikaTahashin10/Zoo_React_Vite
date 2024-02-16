// Animals.jsx
import React, { useState } from 'react';
import animalsData from '../data/animalsData';
import Search from './Search';
import { Link } from 'react-router-dom';
// import Card from './Card';

const Animals = () => {
  const [filteredAnimals, setFilteredAnimals] = useState(animalsData);

  const handleSearch = (query) => {
    const filtered = animalsData.filter(animal =>
      animal.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredAnimals(filtered);
  };

  return (
    <div>
      <h1>Animals Page</h1>
      <Link to="/">Home</Link>
      {/* <Card></Card> */}
      <Search onSearch={handleSearch} />
      <ul>
        {filteredAnimals.map((animal, index) => (
          <li key={index}>{animal.name}</li>
        ))}
      </ul>
      {/* <div className="card-container">
        {animalsData.map((animal, index) => (
          <Card key={index} name={animal.name} />
        ))}
      </div> */}
    </div>
  );
};

export default Animals;
