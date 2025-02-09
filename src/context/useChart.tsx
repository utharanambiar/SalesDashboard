import { createContext, useContext } from "react";
import { ComboChartData, DonutChartData } from "../types/types";

interface ChartContextType {
  comboData: ComboChartData[];
  donutData: DonutChartData[];
  updateComboData: (newData: ComboChartData[]) => void;
  updateDonutData: (newData: DonutChartData[]) => void;
}

export const ChartContext = createContext<ChartContextType | undefined>(
  undefined
);

export const useChart = () => {
  const context = useContext(ChartContext);
  if (!context) {
    throw new Error("useChart must be used within a ChartProvider");
  }
  return context;
};
