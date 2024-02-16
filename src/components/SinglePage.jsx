// SinglePage.jsx
import React from 'react';

const SinglePage = ({ data, match }) => {
  const { itemId } = match.params;
  const item = data.find(item => item.id === itemId);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
};

export default SinglePage;
