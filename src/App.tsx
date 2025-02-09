import "./App.css";
import Dashboard from "./Components/Dashboard";
import { ChartProvider } from "./context/ChartContext";

function App() {
  return (
    <div className="bg-darkBg">
      <ChartProvider>
        <Dashboard />
      </ChartProvider>
    </div>
  );
}

export default App;
