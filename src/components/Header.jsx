import "../styles/global-style.css";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <div className="min-container header">
      <div className="d-flex">
        <div className="d-flex gap-4">
          <button className="round-btn box-shadow">
            <i className="fas fa-bars"></i>
          </button>
          <img src={logo} className="dashboard-logo" alt="Logo" />
        </div>
        <div className="search-bar box-shadow">
          <input type="text" />
          <button className="round-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div className="personnal">
          <button className="round-btn box-shadow">
            <i className="fas fa-user"></i>
          </button>
          <button className="round-btn box-shadow">
            <i className="fas fa-bell"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
