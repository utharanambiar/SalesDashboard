import React, { useState } from "react";
import { comboChartData } from "../utils/data";
import { DashboardContext } from "./useDashboard";

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [startMonth, setStartMonth] = useState<number>(0);
  const [endMonth, setEndMonth] = useState<number>(11);

  // Filter data based on selected months
  const filteredData = comboChartData.filter(
    (_, index) => index >= startMonth && index <= endMonth
  );

  return (
    <DashboardContext.Provider value={{ startMonth, endMonth, setStartMonth, setEndMonth, filteredData }}>
      {children}
    </DashboardContext.Provider>
  );
};
