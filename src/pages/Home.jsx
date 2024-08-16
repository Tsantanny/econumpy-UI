import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Posts from "../components/Posts";
function Home() {
  return (
    <>
      <Header></Header>
      <SideBar></SideBar>
      <div
        style={{ marginLeft: "300px", marginTop: "90px", marginRight: "350px" }}
      >
        <Posts></Posts>
      </div>
    </>
  );
}
export default Home;
