
import axios from "axios";

export const fetchTemperatureData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:7000/temperature/temperatureData"
    );
    console.log("API Response:", response.data);
    return response.data; 
  } catch (error) {
    console.error("Error fetching temperature data:", error);
    throw error;
  }
};
