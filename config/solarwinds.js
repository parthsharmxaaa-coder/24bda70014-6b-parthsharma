import axios from "axios";

export const sendToSolarWinds = async (logEntry) => {

  const token = process.env.SOLARWINDS_TOKEN;

  if (!token) return;

  try {

    await axios.post(
      "https://api.solarwinds.com/logs",
      logEntry,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

  } catch (error) {

    console.error("SolarWinds logging failed");

  }

};