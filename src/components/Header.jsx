

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredLink(index);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div style={styles.header}>
      <Link
        to="/"
        style={{ ...styles.link, ...(hoveredLink === 0 ? styles.hover : {}) }}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        Home
      </Link>
      <Link
        to="/animals"
        style={{ ...styles.link, ...(hoveredLink === 1 ? styles.hover : {}) }}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        Animals
      </Link>
      <Link
        to="/birds"
        style={{ ...styles.link, ...(hoveredLink === 2 ? styles.hover : {}) }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        Birds
      </Link>
      <Link
        to="/about"
        style={{ ...styles.link, ...(hoveredLink === 3 ? styles.hover : {}) }}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        About
      </Link>
    </div>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: '20px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    transition: 'color 0.3s',
  },
  hover: {
    color: 'black', // light blue with full opacity
    textShadow: "black", // light blue shadow with 50% opacity
    transform: 'scale(1.1)', // increase size by 10%
  },
};

export default Header;