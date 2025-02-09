import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import CategoryChart from "./CategoryChart";
import CombinationChart from "./CombinationChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-semibold text-center text-white">
        Dashboard
      </h2>
      <div className="flex gap-10">
        <div className="w-full md:w-2/3 p-4 shadow-lg rounded-lg bg-darkChartBg">
          <CombinationChart />
        </div>
        <div className="w-full md:w-1/3 p-4 shadow-lg rounded-lg bg-darkChartBg">
          <CategoryChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
