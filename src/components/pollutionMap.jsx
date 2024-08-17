import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Circle, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "../styles/map.css"
// import { api_key } from './Container';
import { api_key } from './Chart/useChart';
// Composant pour recentrer la carte
const CenterMapOnSearch = ({ coords }) => {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.setView(coords, 15); // Ajuster le niveau de zoom si nécessaire
    }
  }, [coords, map]);

  return null;
};

const PollutionMap = () => {
  const [pollutionData, setPollutionData] = useState([]);
  const [userPosition, setUserPosition] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchCoords, setSearchCoords] = useState(null);
  const API_KEY = api_key;

  // Fonction pour géolocaliser l'utilisateur
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const userCoords = [position.coords.latitude, position.coords.longitude];
      setUserPosition(userCoords);
      setSearchCoords(userCoords); // Définit la recherche initiale sur la position de l'utilisateur
    });
  }, []);

  // Fonction pour générer des points autour de la position de l'utilisateur
  const generateSurroundingPoints = (lat, lon, numPoints = 5, distance = 0.002) => {
    const points = [];
    for (let i = 0; i < numPoints; i++) {
      const angle = (i / numPoints) * 2 * Math.PI;
      const deltaLat = Math.cos(angle) * distance;
      const deltaLon = Math.sin(angle) * distance;
      points.push([lat + deltaLat, lon + deltaLon]);
    }
    return points;
  };

  // Fonction pour récupérer les données de pollution pour plusieurs points
  const fetchPollutionDataForPoints = (points) => {
    const promises = points.map(([lat, lon]) =>
      fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => ({
          lat,
          lon,
          data: data.list[0]
        }))
    );

    Promise.all(promises)
      .then(results => setPollutionData(results))
      .catch(error => console.error('Erreur:', error));
  };

  useEffect(() => {
    if (searchCoords) {
      const surroundingPoints = generateSurroundingPoints(searchCoords[0], searchCoords[1]);
      fetchPollutionDataForPoints(surroundingPoints);
    }
  }, [searchCoords]);

  // Fonction pour récupérer les coordonnées d'une adresse avec l'API de géocodage d'OpenWeather
  const fetchCoordinates = async (location) => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${API_KEY}`);
    const data = await response.json();
    if (data.coord) {
      setSearchCoords([data.coord.lat, data.coord.lon]);
    } else {
      alert("Lieu introuvable. Veuillez essayer une autre recherche.");
    }
  };

  // Fonction pour rechercher une position
  const handleSearch = (event) => {
    event.preventDefault();
    if (searchLocation) {
      fetchCoordinates(searchLocation);
    }
  };

  // Fonction pour recentrer sur la position de l'utilisateur
  const handleMyPosition = () => {
    if (userPosition) {
      setSearchCoords(userPosition);
    }
  };

  // Fonction pour déterminer la couleur en fonction de l'AQI
  const getAQIColor = (aqi) => {
    console.log(aqi)
    switch (aqi) {
      case 1: return 'green'; // Good
      case 2: return 'yellow'; // Fair
      case 3: return 'orange'; // Moderate
      case 4: return 'red'; // Poor
      case 5: return 'purple'; // Very Poor
      default: return 'grey'; // Unknown
    }
  };

  // Fonction pour obtenir les étiquettes de qualité de l'air
  const getAirQualityLabel = (aqi) => {
    switch (aqi) {
      case 1: return 'Good';
      case 2: return 'Fair';
      case 3: return 'Moderate';
      case 4: return 'Poor';
      case 5: return 'Very Poor';
      default: return 'Unknown';
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <form onSubmit={handleSearch} className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Find air quality by location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">Search</button>
          <button type="button" className="btn btn-secondary ms-2" onClick={handleMyPosition}>Check Air Quality at My Location</button>
        </form>
      </div>

      <MapContainer center={userPosition || [-18.870882369717993, 47.534538666293315]} zoom={15} className='map-container'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <CenterMapOnSearch coords={searchCoords} />
        {pollutionData.map((point, index) => (
          <Circle
            key={index}
            center={[point.lat, point.lon]}
            color={getAQIColor(point.data.main.aqi)}
            fillColor={getAQIColor(point.data.main.aqi)}
            fillOpacity={0.5}
            radius={200} // Rayon de 200 m
          >
            <Popup>
              <div>
                <h4>Pollution de l'air</h4>
                <p>PM2.5: {point.data.components.pm2_5} µg/m³</p>
                <p>PM10: {point.data.components.pm10} µg/m³</p>
                <p>NO2: {point.data.components.no2} µg/m³</p>
                <p>O3: {point.data.components.o3} µg/m³</p>
                <p>CO: {point.data.components.co} µg/m³</p>
                <p>Qualité de l'air: {getAirQualityLabel(point.data.main.aqi)}</p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>
    </div>
  );
};

export default PollutionMap;
