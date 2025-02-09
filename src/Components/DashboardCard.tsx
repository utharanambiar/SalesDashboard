import { useTheme } from "../context/useTheme";
import { CardData } from "../types/types";

function DashboardCard(props: CardData) {
  const { value, label } = props;
  const { theme } = useTheme();
  return (
    <div
      className={`flex flex-col justify-between w-full md:w-1/3 p-4 shadow-lg rounded-lg md:text-4xl font-semibol bg-${
        theme === "light" ? "white" : "darkChartBg"
      } md:mt-5 mb-5`}
    >
      <h3
        className={`text-lg md:text-xl font-medium mb-4 text-${
          theme === "light" ? "gray-900" : "white"
        }`}
      >
        {label}
      </h3>
      <span
        className={`text-xl text-${theme === "light" ? "slate-400" : "slate-300"}`}
      >
        {value}
      </span>
    </div>
  );
}

export default DashboardCard;
