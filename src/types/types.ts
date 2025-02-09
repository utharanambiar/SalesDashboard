export type ComboChartData = {
  month: string;
  revenue: number;
  profit: number;
};

export type DonutChartData = {
  category: string;
  value: number;
};

export type CardData = {
  label: string;
  value: number;
};

type DatasetType =
  | {
      type: "bar";
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }
  | {
      type: "line";
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
      fill: boolean;
      tension: number;
    };

// Define the type for the chart that supports both 'bar' and 'line' datasets
export type ComboChart = {
  labels: string[];
  datasets: DatasetType[];
};
