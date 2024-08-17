import "../styles/global-style.css";
import "../styles/SideBar.css";
import logo from "../assets/images/logo.png";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
function SideBar() {
  const navto = useNavigate();
  return (
    <>
      <section className="min-container side-bar box-shadow">
        <ul className="list-unstyled ">
          <li
            onClick={() => navto("/")}
            className="active d-flex align-items-center "
          >
            <i className="fas fa-home"></i>
            Home
          </li>
          <li className="d-flex align-items-center ">
            <i className="fas fa-calendar-alt"></i>
            Recent Events
          </li>
          <li className="d-flex align-items-center ">
            <i className="fas fa-heartbeat"></i>
            Health
          </li>
          <li className="d-flex align-items-center ">
            <i className="fas fa-users"></i>
            Community
          </li>
        </ul>
        <button
          onClick={() => {
            navto("/login");
          }}
          className="log-out text-dark box-shadow"
        >
          Log Out
        </button>
      </section>
    </>
  );
}

export default SideBar;
