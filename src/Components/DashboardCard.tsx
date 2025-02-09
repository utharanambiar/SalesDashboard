import { CardData } from "../types/types";

function DashboardCard(props: CardData) {
  const { value, label } = props;
  return (
    <div className="flex flex-col justify-between w-full md:w-1/3 p-4 shadow-lg rounded-lg bg-darkChartBg">
      <h3 className="text-xl font-medium mb-4 text-white">{label}</h3>
      <span className="text-xl text-slate-600">{value}</span>
    </div>
  );
}

export default DashboardCard;
