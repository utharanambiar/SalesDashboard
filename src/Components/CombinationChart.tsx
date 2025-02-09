import { Bar } from "react-chartjs-2";
import { useDashboard } from "../context/useDashboard";

function CombinationChart() {
  const { filteredData } = useDashboard();
  const comboChart = {
    labels: filteredData.map((d) => d.month),
    datasets: [
      {
        type: "bar",
        label: "Revenue",
        data: filteredData.map((d) => d.revenue),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        type: "line",
        label: "Profit",
        data: filteredData.map((d) => d.profit),
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

  return (
    <>
      <h3 className="text-xl font-medium mb-4 text-white">
        Revenue and Profit
      </h3>
        <Bar data={comboChart as never} options={comboChartOptions} />
    </>
  );
};

export default CombinationChart;
