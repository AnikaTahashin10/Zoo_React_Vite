import React, { useState } from "react";

const Card = (props) => {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(true);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const closeCard = () => {
    setVisible(false); 
  };

  if (!visible) {
    return null; 
  }

  return (
    <div style={styles.card}>
      <img
        src={`https://source.unsplash.com/400x400/?${props.name}`}
        alt={props.name}
        style={styles.image}
      />
      <h3>{props.name}</h3>
      <div className="cardText">
        <button onClick={decreaseCount} style={styles.button}>-</button>
        <span>{count}</span>
        <button onClick={increaseCount} style={styles.button}>+</button>
        <br />
        <button className="close" onClick={closeCard} style={styles.closeButton}>Close</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "16px",
    maxWidth: "300px",
    textAlign: "center",
    margin: "8px",
    display: "inline-block", // Displays cards inline
    verticalAlign: "top", // this align cards to the top row
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "12px",
  },
  button: {
    margin: "4px",
    padding: "8px 16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  },
  closeButton: {
    marginTop: "12px",
    padding: "8px 16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    cursor: "pointer",
  },
};
export default Card;
