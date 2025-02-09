import React, { useState } from "react";
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
} from "chart.js";
import CategoryChart from "./CategoryChart";
import CombinationChart from "./CombinationChart";
import DashboardCard from "./DashboardCard";
import { comboChartData, donutChartData, months } from "../utils/data";
import { calculateTotal } from "../utils/utility";
import { CardData } from "../types/types";

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
  const [filteredComboData, setFilteredComboData] = useState(comboChartData);
  const [filteredDonutData, setFilteredDonutData] = useState(donutChartData);

  const cardData: CardData[] = [
    {
      label: "Order Quantity",
      value: calculateTotal(filteredDonutData, "value"),
    },
    {
      label: "Profit",
      value: calculateTotal(filteredComboData, "profit"),
    },
    {
      label: "Revenue",
      value: calculateTotal(filteredComboData, "revenue"),
    },
  ];

  const applyFilter = (startMonth: number, endMonth: number) => {
    // Filter combo chart data based on month range
    const filteredData = comboChartData.filter((data) => {
      const monthIndex = months.indexOf(data.month);
      return monthIndex >= startMonth && monthIndex <= endMonth;
    });
    setFilteredComboData(filteredData);

    // Filter category chart data based on month
    const filteredCategoryData = donutChartData.filter((data) => {
      const monthIndex = months.indexOf(data.month);
      return monthIndex >= startMonth && monthIndex <= endMonth;
    });
    setFilteredDonutData(filteredCategoryData);
  };

  const resetFilter = () => {
    setFilteredComboData(comboChartData);
    setFilteredDonutData(donutChartData);
  };

  return (
    <div className="p-4 space-y-8">
      <h2 className="text-2xl font-semibold text-center text-white">
        Dashboard
      </h2>
      <MonthRangeFilter
        onApplyFilter={applyFilter}
        onResetFilter={resetFilter}
      />
      <div className="flex gap-10">
        {cardData.map((card, idx) => (
          <DashboardCard key={idx} value={card.value} label={card.label} />
        ))}
      </div>
      <div className="flex gap-10">
        <div className="w-full md:w-2/3 p-4 shadow-lg rounded-lg bg-darkChartBg">
          <CombinationChart />
        </div>
        <div className="w-full md:w-1/3 p-4 shadow-lg rounded-lg bg-darkChartBg">
          <CategoryChart data={filteredDonutData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
