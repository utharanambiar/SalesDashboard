import React from "react";
import { Doughnut } from "react-chartjs-2";
import { DonutChartData } from "../types/types";

interface CategoryChartProps {
  data: DonutChartData[];
}

const CategoryChart: React.FC<CategoryChartProps> = ({ data }) => {
  const donutChart = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        data: data.map((item) => item.value),
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
      <h3 className="text-xl font-medium mb-4 text-white">
        Category Distribution
      </h3>
      <Doughnut data={donutChart} />
    </>
  );
};

export default CategoryChart;
