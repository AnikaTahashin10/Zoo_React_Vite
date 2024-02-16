import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header style={styles.header}>
        <nav>
          <div style={styles.logo}>
            <h1>The Zoo</h1>
          </div>

          <ul className="letter" style={styles.letter}>
            <Link to="/">ZOO</Link>
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/animals">Animals</Link>
            <Link to="/birds">Birds</Link>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

const styles = {
  header: {
    boxSizing: "border-box",
    margin: "0",
    padding: "0",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  letter: {
    fontWeight: "500",
    color: "black",
  },

  logo: {
    display: "flex",
    justifyContent: "right",
  },
};
