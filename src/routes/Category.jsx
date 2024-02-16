import React from 'react';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const CategoryPage = ({ title, data, basePath }) => {
  return (
    <div>
      <h2>{title} Page</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <Link to={`${basePath}/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};


CategoryPage.propTypes = {
  title: PropTypes.string.isRequired, 
  data: PropTypes.array.isRequired, 
  basePath: PropTypes.string.isRequired, 
};

export default CategoryPage;
