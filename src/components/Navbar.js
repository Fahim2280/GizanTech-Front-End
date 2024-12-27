
import React from "react";

const Navbar = () => (
  <nav style={styles.navbar}>
    <h1 style={styles.title}>Temperature Tracker</h1>
  </nav>
);

const styles = {
  navbar: {
    backgroundColor: "#007bff",
    padding: "10px",
    color: "white",
    textAlign: "center",
  },
  title: {
    margin: 0,
  },
};

export default Navbar;
