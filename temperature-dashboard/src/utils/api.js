import axios from "axios";

const API_URL = "http://localhost:7000/temperature/temperatureData";

export const fetchTemperatureData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `yourSecretKey`, 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching temperature data:", error);
    throw error;
  }
};
