import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "../styles/map.css";
import MyMap from "../components/map";
import PieChart from "../components/Chart/Chart";
import PollutionMap from "../components/pollutionMap";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Posts from "../components/Posts";
import NewPost from "../components/NewPost";
import RightSideBar from "../components/RightSideBar";
function MapPage() {
  return (
    <>
      <h1>pollution around you</h1>
      <Header></Header>
      <SideBar></SideBar>
      <div
        style={{
          marginLeft: "340px",
          marginTop: "90px",
          marginRight: "50px",
          position: "relative",
        }}
      >
        <h2 className="text-center">Air Quality at My Location</h2>
        <div className="d-flex justify-content-between">
          <PieChart color="#4e8098ff" keys="co" label="carbone" value={350} />
          <PieChart color="#4e8098ff" keys="aqi" label="pollution" value={5} />
          <PieChart color="#4e8098ff" keys="o3" label="ozone" value={350} />
        </div>
        <PollutionMap />
      </div>
    </>
  );
}

export default MapPage;
