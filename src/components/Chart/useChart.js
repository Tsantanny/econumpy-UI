import { useEffect, useState } from "react";
import axios from "axios";
import { color } from "chart.js/helpers";

export const api_key = "57824b28a16da3eb51a1fe9cdc4f2823";

export const useChart = () => {
  const [pollutionData, setPollutionData] = useState({ co: 50, aqi: 0, o3: 0 });

  useEffect(() => {
    const fetchData = () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const res = await axios.get(
            `http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`
          );
          // console.log(res.data.list[0]);
          setPollutionData({
            co: res.data.list[0].components.co,
            aqi: res.data.list[0].main.aqi,
            o3: res.data.list[0].components.o3,
          });
        } catch (error) {
          console.log(error);
        }
      });
    };

    fetchData();
  }, []);

  const style = {
    width: "200px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    border: "1px solid grey",
    borderRadius: "2rem",
    margin: "1rem",
    background: "#ffffff",
    filter: "blur(20%)",
    color: "#0000",
  };
  return {
    pollutionData,
  };
};
