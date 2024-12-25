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

const TemperatureChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => new Date(item.timestamp).toLocaleTimeString()), // X-axis timestamps
    datasets: [
      {
        label: "Temperature (°C)",
        data: data.map((item) => item.temperature), // Y-axis temperatures
        borderColor: "#4f46e5", // Purple color
        backgroundColor: "rgba(79, 70, 229, 0.3)", // Light purple
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}°C`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
        suggestedMin: 0,
        suggestedMax: 50,
      },
    },
  };

  return (
    <div className="h-80 w-full bg-white shadow-md p-4 rounded-md">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default TemperatureChart;
