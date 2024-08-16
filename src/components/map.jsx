import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import "../styles/map.css"

// Corriger le problème d'icônes avec Leaflet dans React
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

const MyMap = () => {
  const [position, setPosition] = useState([-18.870882369717993, 47.534538666293315]); 

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition([pos.coords.latitude, pos.coords.longitude]);
    });
}
}, []);
navigator.geolocation.getCurrentPosition((pos)=>{
console.log(pos.coords.latitude)
console.log(pos.coords.longitude)
})
// console.log(pos.coords.longitude)

  return (
    <MapContainer center={position} zoom={13} className='map-container'>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Vous êtes ici</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
