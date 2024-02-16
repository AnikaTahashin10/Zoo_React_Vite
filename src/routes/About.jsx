import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About This Project</h1>
      <div style={styles.content}>
        <p>
          Welcome to the About page of our Animal Information App! This project aims to provide users with information about various animals and birds through an intuitive and user-friendly interface.
        </p>
        <p>
          Our application features a Home page, Animals page, Birds page, and an About page, each serving its unique purpose to enhance the user experience.
        </p>
        <h2>Features Implemented:</h2>
        <ul style={styles.list}>
          <li>Home page with links to Animals and Birds pages</li>
          <li>Animals page with a list of animals and a search feature</li>
          <li>Birds page with a list of birds and a search feature</li>
          <li>About page providing information about the project</li>
        </ul>
        <h2>Technologies Used:</h2>
        <ul style={styles.list}>
          <li>React for building the user interface</li>
          <li>React Router for client-side routing</li>
          <li>JavaScript ES6+ for writing modern JavaScript code</li>
          <li>CSS for styling the components</li>
        </ul>
        <h2>Future Enhancements:</h2>
        <p>
          We are continuously working on improving our application. Some of the planned enhancements include:
        </p>
        <ul style={styles.list}>
          <li>Adding more detailed information about each animal and bird</li>
          <li>Implementing user authentication and personalized content</li>
          <li>Enhancing the search functionality with filters and sorting options</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    color: 'orange',
    fontSize: '36px',
    marginBottom: '20px',
  },
  content: {
    fontSize: '18px',
    textAlign: 'left',
  },
  list: {
    marginLeft: '20px',
  },
};

export default About;
