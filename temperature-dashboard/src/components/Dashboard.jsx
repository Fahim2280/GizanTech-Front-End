import React, { useState, useEffect } from "react";
import axios from "axios";
import TemperatureChart from "./TemperatureChart";

const Dashboard = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:7000/temperature/temperatureData",
          {
            headers: { Authorization: "yourSecretKey" },
          }
        );
        setTemperatureData(response.data);
      } catch (err) {
        setError("Failed to load temperature data.");
      } finally {
        setLoading(false); // Stop showing "Loading..." after the API call
      }
    };

    fetchTemperatureData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Real-Time Temperature Dashboard
        </h1>
        <TemperatureChart data={temperatureData} />
      </div>
    </div>
  );
};

export default Dashboard;
