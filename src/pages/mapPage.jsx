import { MapContainer, TileLayer, useMap ,Marker,Popup} from "react-leaflet";
import "../styles/map.css"
import MyMap from "../components/map";
function MapPage() {
  return (
    <>
    <h1>Your location</h1>
        <MyMap/>
    </>
  );
}

export default MapPage;
