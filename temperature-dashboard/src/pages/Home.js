// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { fetchTemperatureData } from "../services/api";
import TemperatureChart from "../components/TemperatureChart";

const Home = () => {
  const [temperatureData, setTemperatureData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTemperatureData();
        setTemperatureData(data);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!temperatureData) return <p>No data available</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Temperature Dashboard</h1>
      <p>Current Temperature: {temperatureData.temperature}</p>
      <p>Unit: {temperatureData.unit}</p>
      <p>Timestamp: {new Date(temperatureData.timestamp).toLocaleString()}</p>
      <TemperatureChart temperatureData={temperatureData} />
    </div>
  );
};

export default Home;
