import { ComboChartData, DonutChartData } from "../types/types";

export const comboChartData: ComboChartData[] = [
  { month: "January", revenue: 5000, profit: 1500 },
  { month: "February", revenue: 7000, profit: 2000 },
  { month: "March", revenue: 6000, profit: 1800 },
  { month: "April", revenue: 8000, profit: 2500 },
  { month: "May", revenue: 7500, profit: 2200 },
  { month: "June", revenue: 9000, profit: 3000 },
  { month: "July", revenue: 8500, profit: 2800 },
  { month: "August", revenue: 9500, profit: 3200 },
  { month: "September", revenue: 10000, profit: 3500 },
  { month: "October", revenue: 11000, profit: 4000 },
  { month: "November", revenue: 10500, profit: 3800 },
  { month: "December", revenue: 11500, profit: 4200 },
];

export const donutChartData: DonutChartData[] = [
  { category: "Electronics", value: 35, month: "January" },
  { category: "Fashion", value: 25, month: "March" },
  { category: "Home", value: 15, month: "May" },
  { category: "Sports", value: 10, month: "September" },
  { category: "Other", value: 15, month: "December" },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
