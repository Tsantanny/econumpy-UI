import "../styles/global-style.css";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <div className="min-container header">
      <div className="d-flex">
        <img src={logo} className="dashboard-logo" alt="Logo" />{" "}
        <div className="search-bar">
          <input type="text" />
          <button className="round-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="personnal">
          <button className="round-btn">
            <i className="fas fa-user"></i>
          </button>
          <button className="round-btn">
            <i className="fas fa-bell"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
