import { Typography } from "antd";
import "./App.css";
import Panel from "./components/Panel";
import { useAppSelector } from "./hooks";
import Home from "./screens/Home";
import store from "./store";

function App() {
  const logMessage = useAppSelector((state) => state.home.logMessage);

  return (
    <div className="App">
      <Panel title="Welcome to Map Services" />
      <Home />
      <Typography.Text>{logMessage}</Typography.Text>
    </div>
  );
}

export default App;
