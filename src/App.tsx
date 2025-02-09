import "./App.css";
import Dashboard from "./Components/Dashboard";
import { DashboardProvider } from "./context/DashboardContext";

function App() {
  return (
    <div className="bg-darkBg">
      <DashboardProvider>
        <Dashboard />
      </DashboardProvider>
    </div>
  );
}

export default App;
