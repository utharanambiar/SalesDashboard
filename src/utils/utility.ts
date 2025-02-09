interface ChartDataItem {
  profit?: number;
  value?: number;
  revenue?: number;
}

const calculateTotal = (
  data: ChartDataItem[],
  key: "profit" | "value" | "revenue"
) => {
  return data.reduce((total, current) => total + (current[key] || 0), 0);
};

export { calculateTotal };
