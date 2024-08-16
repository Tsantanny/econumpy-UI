// src/components/PieChart.tsx
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

const PieChart = ({ label, currentValue, value, color }) => {
  const data = {
    labels: [label, "void"],
    datasets: [
      {
        data: [currentValue, value-currentValue],
        backgroundColor: [color, "transparent"],
        hoverBackgroundColor: ["lightgreen", "transparent"],
        borderWidth: 1,
        borderColor: "#40404040", // Épaisseur de la bordure en pixels
      },
    ],
  };

  const options = {
    // Vous pouvez personnaliser les options du graphique ici
    plugins: {
      doughnut: {
        borderWidth: 0,
        borderColor: "#40404040", // Épaisseur de la bordure en pixels
      },
    },
  };

  return (
    <>
      <p style={{ color: "#FFF", fontWeight: "500" }}>{label}</p>
      <Doughnut data={data} options={options} style={{ width: "150px" }} />
    </>
  );
};

export default PieChart;
