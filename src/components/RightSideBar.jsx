import "../styles/RightSideBar.css";
import { useLogin } from "../components/useLogin";
import PieChart from "./Chart/Chart";
function RightSideBar() {
  const { navigateTo } = useLogin();
  return (
    <>
      <section className="right-sidebar-container">
        <h5>Immediate Support and Environment</h5>
        <ul className="list-unstyled">
          <li>
            <i class="fas fa-exclamation-circle"></i>Make a report
          </li>
          <li>
            <i class="fas fa-hospital"></i>Find the nearest hospital
          </li>
        </ul>
        <h5 className="mt-3">Monitor Air Pollution</h5>
        <PieChart
          color="#4e8098ff"
          keys="co"
          label="carbone"
          value={350}
          width={150}
        ></PieChart>

        <button
          className="secondary-btn box-shadow cursor-pointer mt-5"
          onClick={() => navigateTo("/map")}
        >
          View More Metrics
        </button>
      </section>
    </>
  );
}
export default RightSideBar;
