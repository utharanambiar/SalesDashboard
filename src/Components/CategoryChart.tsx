import { donutChartData } from "../utils/data";
import { Doughnut } from "react-chartjs-2";

const donutChart = {
  labels: donutChartData.map((data) => data.category),
  datasets: [
    {
      data: donutChartData.map((data) => data.value),
      backgroundColor: ["#DF6E53", "#E49A4E", "#50B19E", "#5672B3", "#03254E"],
      hoverOffset: 25,
      hoverBorderWidth: 5
    },
  ],
};

function CategoryChart() {
  return (
    <div className="flex justify-center">
      <div className="w-full md:w-1/2 p-4 shadow-lg rounded-lg bg-darkChartBg">
        <h3 className="text-xl font-medium mb-4 text-white">Category Distribution</h3>
        <Doughnut data={donutChart} />
      </div>
    </div>
  );
}

export default CategoryChart;
