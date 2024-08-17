import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "../styles/map.css";

const CenterMapOnSearch = ({ coords }) => {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.setView(coords, 15);
    }
  }, [coords, map]);

  return null;
};

const HospitalsMap = () => {
  const [userPosition, setUserPosition] = useState(null);
  const [hospitalData, setHospitalData] = useState([]);
  const [searchLocation, setSearchLocation] = useState("");
  const [searchCoords, setSearchCoords] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const userCoords = [position.coords.latitude, position.coords.longitude];
      setUserPosition(userCoords);
      setSearchCoords(userCoords);
    });
  }, []);

  // Fonction pour récupérer les hôpitaux proches en utilisant Google Places API
  const fetchNearbyHospitals = async (coords) => {
    const [lat, lon] = coords;
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lon}&radius=5000&type=hospital&key=VOTRE_API_KEY_GOOGLE_PLACES`);
    const data = await response.json();
    setHospitalData(data.results);
  };

  useEffect(() => {
    if (searchCoords) {
      fetchNearbyHospitals(searchCoords);
    }
  }, [searchCoords]);

  // Fonction pour récupérer les coordonnées d'une adresse (recherche)
  const fetchCoordinates = async (location) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(location)}&key=VOTRE_API_KEY_GOOGLE_PLACES`);
    const data = await response.json();
    if (data.results.length > 0) {
      const coords = data.results[0].geometry.location;
      setSearchCoords([coords.lat, coords.lng]);
    } else {
      alert("Lieu introuvable. Veuillez essayer une autre recherche.");
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchLocation) {
      fetchCoordinates(searchLocation);
    }
  };

  const handleMyPosition = () => {
    if (userPosition) {
      setSearchCoords(userPosition);
    }
  };

  return (
    <div>
      <div className="container mt-3">
        <form onSubmit={handleSearch} className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for hospitals by location"
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">Search</button>
          <button type="button" className="btn btn-secondary ms-2" onClick={handleMyPosition}>Find Hospitals Near Me</button>
        </form>
      </div>

      <MapContainer center={userPosition || [0, 0]} zoom={15} className='map-container'>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <CenterMapOnSearch coords={searchCoords} />
        {hospitalData.map((hospital, index) => (
          <Marker
            key={index}
            position={[hospital.geometry.location.lat, hospital.geometry.location.lng]}
          >
            <Popup>
              <div>
                <h4>{hospital.name}</h4>
                <p>{hospital.vicinity}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HospitalsMap;
