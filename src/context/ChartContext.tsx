import React, { useState, ReactNode } from "react";
import { comboChartData as initialComboData, donutChartData as initialDonutData } from "../utils/data";
import { ComboChartData, DonutChartData } from "../types/types";
import { ChartContext } from "./useChart";

// Provider component
export const ChartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [comboData, setComboData] = useState<ComboChartData[]>(initialComboData);
  const [donutData, setDonutData] = useState<DonutChartData[]>(initialDonutData);

  const updateComboData = (newData: ComboChartData[]) => {
    setComboData(newData);
  };

  const updateDonutData = (newData: DonutChartData[]) => {
    setDonutData(newData);
  };

  return (
    <ChartContext.Provider value={{ comboData, donutData, updateComboData, updateDonutData }}>
      {children}
    </ChartContext.Provider>
  );
};
