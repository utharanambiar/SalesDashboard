import { createContext, useContext } from "react";
import { ComboChartData } from "../types/types";


interface DashboardContextType {
  startMonth: number;
  endMonth: number;
  setStartMonth: (month: number) => void;
  setEndMonth: (month: number) => void;
  filteredData: ComboChartData[];
}

export const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
    const context = useContext(DashboardContext);
    if (!context) throw new Error("useDashboard must be used within a DashboardProvider");
    return context;
  };