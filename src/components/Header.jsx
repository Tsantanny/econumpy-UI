import "../styles/global-style.css";
import "../styles/Header.css";
import logo from "../assets/images/logo.png";
import NotificationDropdown from "./notification";

function Header() {
  const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0'); // Les mois sont indexés à partir de 0
const year = today.getFullYear();

const formattedDate = `${day}/${month}/${year}`;
console.log(formattedDate);

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
          
          <NotificationDropdown notifications={
            [
              {
                 content : "content",
              date : formattedDate
              },
              {
                 content : "content",
              date : "date"
              },
              {
                 content : "content",
              date : "date"
              },
              {
                 content : "content",
              date : "date"
              },
              {
                 content : "content",
              date : "date"
              }
            ]
          }/>

        </div>
      </div>
    </div>
  );
}

export default Header;
