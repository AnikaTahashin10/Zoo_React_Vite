// CategoryPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryPage = ({ title, data }) => {
  return (
    <div>
      <h1>{title}</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <Link to={`/details/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
