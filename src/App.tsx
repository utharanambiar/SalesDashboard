import "./App.css";
import Dashboard from "./Components/Dashboard";
import { ChartProvider } from "./context/ChartContext";
import { useTheme } from "./context/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "light" ? "bg-gray-50" : "bg-darkBg"}`}>
      <ChartProvider>
        <Dashboard />
      </ChartProvider>
    </div>
  );
}

export default App;
