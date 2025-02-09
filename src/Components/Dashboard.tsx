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
      <CategoryChart />
    </div>
  );
};

export default Dashboard;
