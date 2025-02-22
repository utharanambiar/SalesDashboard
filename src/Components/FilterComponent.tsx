import React, { useState } from "react";
import { months } from "../utils/data";
import { useTheme } from "../context/useTheme";

interface MonthRangeFilterProps {
  onApplyFilter: (startMonth: number, endMonth: number) => void;
  onResetFilter: () => void;
}

const MonthRangeFilter: React.FC<MonthRangeFilterProps> = ({
  onApplyFilter,
  onResetFilter,
}) => {
  const [startMonth, setStartMonth] = useState<number>(0); // Default to January
  const [endMonth, setEndMonth] = useState<number>(11); // Default to December
  const { theme } = useTheme();

  const handleApply = () => {
    onApplyFilter(startMonth, endMonth);
  };

  const handleReset = () => {
    setStartMonth(0);
    setEndMonth(11);
    onResetFilter();
  };

  return (
    <div className="flex flex-col md:flex-row justify-end md:items-center gap-4 mb-6">
      <div className="flex items-center">
        <label
          htmlFor="start-month"
          className={`text-${theme === "light" ? "gray-500" : "white"} mr-2`}
        >
          Start Month:
        </label>
        <select
          id="start-month"
          value={startMonth}
          onChange={(e) => {
            const newStartMonth = Number(e.target.value);
            setStartMonth(newStartMonth);

            // Auto-adjust end month if it's before the start month
            if (newStartMonth > endMonth) {
              setEndMonth(newStartMonth);
            }
          }}
          className={`p-2 rounded-md w-full ${
            theme === "light"
              ? "bg-white text-gray-900"
              : "bg-darkChartBg text-white"
          } shadow-md hover:shadow-lg transition-shadow`}
        >
          {months.map((month, index) => (
            <option key={month} value={index}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center">
        <label
          htmlFor="end-month"
          className={`text-${theme === "light" ? "gray-500" : "white"} mr-2`}
        >
          End Month:
        </label>
        <select
          id="end-month"
          value={endMonth}
          onChange={(e) => setEndMonth(Number(e.target.value))}
          className={`p-2 rounded-md w-full ${
            theme === "light"
              ? "bg-white text-gray-900"
              : "bg-darkChartBg text-white"
          } shadow-md hover:shadow-lg transition-shadow`}
        >
          {months.map((month, index) => (
            <option key={month} value={index} disabled={index < startMonth}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 mt-4 md:mt-0">
        <button
          onClick={handleApply}
          className="px-4 py-2 bg-blue-600 text-white rounded-md w-1/2"
        >
          Apply
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-gray-600 text-white rounded-md w-1/2 "
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default MonthRangeFilter;
