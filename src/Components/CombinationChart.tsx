import { Bar } from "react-chartjs-2";
import { comboChartData } from "../utils/data";
import { ComboChart } from "../types/types";

const comboChart: ComboChart = {
  labels: comboChartData.map((data) => data.month),
  datasets: [
    {
      type: "bar",
      label: "Revenue",
      data: comboChartData.map((data) => data.revenue),
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      type: "line",
      label: "Profit",
      data: comboChartData.map((data) => data.profit),
      borderColor: "#DF6E53",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const comboChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};

function CombinationChart() {
  return (
    <>
      <h3 className="text-xl font-medium mb-4 text-white">
        Revenue and Profit
      </h3>
      <Bar data={comboChart as never} options={comboChartOptions} />
    </>
  );
}

export default CombinationChart;
