import { Doughnut } from "react-chartjs-2";
import { useChart } from "../context/useChart";
import { useTheme } from "../context/useTheme";

function CategoryChart() {
  const { donutData } = useChart();
  const { theme } = useTheme();
  const donutChart = {
    labels: donutData.map((item) => item.category),
    datasets: [
      {
        data: donutData.map((item) => item.value),
        backgroundColor: [
          "#DF6E53",
          "#E49A4E",
          "#50B19E",
          "#5672B3",
          "#03254E",
        ],
        hoverOffset: 25,
        hoverBorderWidth: 5,
      },
    ],
  };

  return (
    <>
      <h3
        className={`text-xl font-medium mb-4 text-${
          theme === "light" ? "gray-900" : "white"
        }`}
      >
        Category Distribution
      </h3>
      {donutData.length > 0 ? (
        <Doughnut data={donutChart} />
      ) : (
        <div className="text-2xl text-gray-500 h-full flex justify-center items-center">
          {" "}
          No data to display
        </div>
      )}
    </>
  );
}

export default CategoryChart;
