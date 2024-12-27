
import React from "react";

const TemperatureCard = ({ temperatureData }) => (
  <div style={styles.card}>
    <p>Temperature: {temperatureData.temperature}</p>
    <p>Unit: {temperatureData.unit}</p>
    <p>Timestamp: {new Date(temperatureData.timestamp).toLocaleString()}</p>
  </div>
);

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px auto",
    width: "300px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
};

export default TemperatureCard;
