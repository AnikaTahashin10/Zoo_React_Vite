import React from 'react';
import PropTypes from 'prop-types'; 
import { useParams } from 'react-router-dom';

const SinglePage = ({ data }) => {
  const { itemId } = useParams();

  const item = data.find(item => item.id === itemId);

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
};

SinglePage.propTypes = {
  data: PropTypes.array.isRequired, 
};

export default SinglePage;
