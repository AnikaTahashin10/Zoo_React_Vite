import React from 'react';

const Search = ({ onSearch, value }) => {
  const handleChange = (event) => {
    onSearch(event.target.value);
  };

  const handleClear = () => {
    onSearch('');
  };

  return (
    <div style={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search animals..."
        value={value}
        onChange={handleChange}
        style={styles.searchInput}
      />
      {value && (
        <button onClick={handleClear} style={styles.clearButton}>Clear</button>
      )}
    </div>
  );
};

const styles = {
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  searchInput: {
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '8px',
    fontSize: '16px',
    width: '300px',
  },
  clearButton: {
    padding: '8px 12px',
    backgroundColor: 'orange',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default Search;
