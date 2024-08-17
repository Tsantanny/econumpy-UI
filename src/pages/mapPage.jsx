import { MapContainer, TileLayer, useMap ,Marker,Popup} from "react-leaflet";
import "../styles/map.css"
import MyMap from "../components/map";
import PieChart from "../components/Chart/Chart";
import PollutionMap from "../components/pollutionMap";
function MapPage() {
  return (
    <>  
    <h1>pollution around you</h1>
      <PieChart color="green" keys="co" label="carbone" value={350}  />
        <PollutionMap/>
    </>
  );
}

export default MapPage;
