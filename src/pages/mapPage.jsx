import { MapContainer, TileLayer, useMap ,Marker,Popup} from "react-leaflet";
import "../styles/map.css"
import MyMap from "../components/map";
import PollutionMap from "../components/pollutionMap";
function MapPage() {
  return (
    <>
    <h1>pollution around you</h1>
        <PollutionMap/>
    </>
  );
}

export default MapPage;
