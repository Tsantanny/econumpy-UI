// src/components/PieChart.tsx
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { useChart } from "./useChart";
ChartJS.register(ArcElement, Tooltip);

const PieChart = ({ label, keys, value, color }) => {

  const {pollutionData, style} = useChart();

  console.log(pollutionData);
  

  const data = {
    labels: [label, "void"],
    datasets: [
      {
        data: [pollutionData[`${keys}`], value-pollutionData[`${keys}`]],
        backgroundColor: [color, "transparent"],
        hoverBackgroundColor: ["lightgreen", "transparent"],
        borderWidth: 1,
        borderColor: "#40404040", // Épaisseur de la bordure en pixels
      },
    ],
  };

  // const options = {
  //   // Vous pouvez personnaliser les options du graphique ici
  //   plugins: {
  //     doughnut: {
  //       borderWidth: 0,
  //       borderColor: "#40404040", // Épaisseur de la bordure en pixels
  //     },
  //   },
  // };

  return (
    <div style={style}>
      <p style={{ color: "#FFF", fontWeight: "500" }}>{label}</p>
      <Doughnut data={data} style={{ width: "150px" }} />
    </div>
  );
};

export default PieChart;
