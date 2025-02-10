import React from "react";
import MonthRangeFilter from "./FilterComponent";
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
  LineController,
} from "chart.js";
import CategoryChart from "./CategoryChart";
import CombinationChart from "./CombinationChart";
import DashboardCard from "./DashboardCard";
import { comboChartData, donutChartData, months } from "../utils/data";
import { calculateTotal } from "../utils/utility";
import { CardData } from "../types/types";
import { useChart } from "../context/useChart";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "../context/useTheme";
import sales from "../../public/sales.png";

ChartJS.register(
  LineController,
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
  const { theme, toggleTheme } = useTheme();
  const { comboData, donutData, updateComboData, updateDonutData } = useChart();

  const cardData: CardData[] = [
    {
      label: "Order Quantity",
      value: calculateTotal(donutData, "value"),
    },
    {
      label: "Profit",
      value: calculateTotal(comboData, "profit"),
    },
    {
      label: "Revenue",
      value: calculateTotal(comboData, "revenue"),
    },
  ];

  const applyFilter = (startMonth: number, endMonth: number) => {
    // Filter combo chart data based on month range
    const filteredData = comboChartData.filter((data) => {
      const monthIndex = months.indexOf(data.month);
      return monthIndex >= startMonth && monthIndex <= endMonth;
    });
    updateComboData(filteredData);

    // Filter category chart data based on month
    const filteredCategoryData = donutChartData.filter((data) => {
      const monthIndex = months.indexOf(data.month);
      return monthIndex >= startMonth && monthIndex <= endMonth;
    });
    updateDonutData(filteredCategoryData);
  };

  const resetFilter = () => {
    updateComboData(comboChartData);
    updateDonutData(donutChartData);
  };

  return (
    <div
      className={`p-4 space-y-8 bg-${theme} text-${
        theme === "light" ? "black" : "white"
      } h-screen overflow-y-scroll`}
    >
      <div className="flex flex-row justify-between">
        <div className="flex">
          <img
            src={sales}
            alt="sales logo"
            className="w-10 md:w-12 lg:w-16 xl:w-20 h-auto object-contain self-start"
          />
          <h2
            className={`text-2xl ml-3 md:text-4xl font-semibol text-${
              theme === "light" ? "gray-900" : "white"
            } md:mt-5 mb-5 font-mono`}
          >
            SALES DASHBOARD
          </h2>
        </div>
        {/* Light and dark theme support */}
        <button
          onClick={toggleTheme}
          className="flex self-start cursor-pointer"
          title={`Toggle to change to ${
            theme === "light" ? "dark" : "light"
          } mode`}
        >
          {theme === "dark" ? (
            <IoSunny size="30" />
          ) : (
            <IoMoon size="30" color="gray" />
          )}
        </button>
      </div>
      <MonthRangeFilter
        onApplyFilter={applyFilter}
        onResetFilter={resetFilter}
      />
      <div className="flex gap-10 overflow-x-auto md:overflow-x-visible">
        {/* Render Profit, Revenue and Quantity tiles */}
        {cardData.map((card, idx) => (
          <DashboardCard key={idx} value={card.value} label={card.label} />
        ))}
      </div>
      <div className="flex flex-col xl:flex-row gap-10">
        <div
          className={`w-full xl:w-2/3 p-4 shadow-lg rounded-lg bg-${
            theme === "light" ? "white" : "darkChartBg"
          }`}
        >
          <CombinationChart />
        </div>
        <div
          className={`w-full xl:w-1/3 p-4 shadow-lg rounded-lg bg-${
            theme === "light" ? "white" : "darkChartBg"
          }`}
        >
          <CategoryChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
