
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TemperatureChart = ({ temperatureData }) => {
  const labels = Array.from({ length: 10 }, (_, i) =>
    new Date(Date.now() - i * 60000).toLocaleTimeString()
  ).reverse();

  const data = {
    labels, 
    datasets: [
      {
        label: "Temperature (°C)",
        data: labels.map(() => Math.random() * 10 + 30), 
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4, 
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: "Temperature Trend",
      },
    },
  };

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default TemperatureChart;
