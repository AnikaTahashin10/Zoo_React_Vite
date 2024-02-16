import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{textAlign: "center"}}>Welcome to the Animal App!</h1>
      <Link to="/animals">
        <img src="https://images.unsplash.com/photo-1551725301-5183dc1dbb83?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Animals" style={{height: "50%", width: "50%", margin: "10px" }}/>
      </Link>
      <Link to="/birds">
        <img src="https://images.unsplash.com/photo-1549608276-5786777e6587?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Birds" style={{height: "50%", width: "50%", margin: "10px", }} />
      </Link>
    </div>
  );
};

export default Home;
