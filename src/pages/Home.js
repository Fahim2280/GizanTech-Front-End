// src/pages/Home.js
import React, { useEffect, useState } from "react";
import { fetchTemperatureData } from "../services/api";
import TemperatureChart from "../components/TemperatureChart";

const Home = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [currentTemperature, setCurrentTemperature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTemperatureData();

        // Update the current temperature display
        setCurrentTemperature({
          temperature: data.temperature,
          unit: data.unit,
          timestamp: new Date(data.timestamp).toLocaleString(),
        });

        // Update the chart data, keeping only the last 10 entries
        setTemperatureData((prevData) => [
          ...prevData.slice(-9),
          {
            temperature: parseFloat(data.temperature),
            timestamp: new Date(data.timestamp).toLocaleTimeString(),
          },
        ]);
      } catch (error) {
        console.error("Error fetching temperature data:", error);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchData();

    // Polling every 5 seconds
    const intervalId = setInterval(fetchData, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (loading && temperatureData.length === 0) return <p>Loading...</p>;

  const chartData = {
    labels: temperatureData.map((data) => data.timestamp),
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatureData.map((data) => data.temperature),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Real-Time Temperature Dashboard</h1>

      {/* Display the current temperature */}
      {currentTemperature && (
        <div
          style={{ marginBottom: "20px", fontSize: "18px", fontWeight: "bold" }}
        >
          <p>Current Temperature: {currentTemperature.temperature}</p>
          <p>Unit: {currentTemperature.unit}</p>
          <p>Last Updated: {currentTemperature.timestamp}</p>
        </div>
      )}

      {/* Render the chart */}
      <TemperatureChart chartData={chartData} />
    </div>
  );
};

export default Home;
