import { useEffect, useState } from 'react';
// import App from '../Chart.jsx'
import axios from 'axios';

export const api_key = "57824b28a16da3eb51a1fe9cdc4f2823"

export const Container = () => {

  const [data, setData] = useState({});
  

  useEffect(() => {
    const fetchData = async() => {

      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        try {
          const res = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${api_key}`)
          // console.log(res.data.list[0].main.aqi);
          setData({co: res.data.list[0].components.co, aqi: res.data.list[0].main.aqi})
          
        } catch (error) {
          console.log(error);
        }
      })
    }

    fetchData();
  }, [])

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
    background: "#40404040",
    filter: "blur(20%)",
  }

  return (
    <div className='row vh-100 vw-100'>

      <div className='col-3 bg-secondary'>
        <div style={style}>
          <App label="Pollution" currentValue={data.aqi} value={5}  color="green" />
        </div>

        <div style={style} >
          <App label="CO2" currentValue={data.co} value={350}  color="red" />
        </div>
      </div>

    </div>
  );
};
