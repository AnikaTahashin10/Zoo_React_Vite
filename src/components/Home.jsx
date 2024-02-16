import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{textAlign: "center"}}>Welcome to the Animal App!</h1>
      <Link to="/animals">
        <img src="./src/assets/fox.avif" alt="Animals" style={{height: "50%", width: "50%", margin: "10px" }}/>
      </Link>
      <Link to="/birds">
        <img src="./src/assets/birds.jpeg" alt="Birds" style={{height: "50%", width: "50%", margin: "10px", }} />
      </Link>
    </div>
  );
};

export default Home;
