import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./component/WarningSign";
import MyBadge from "./component/MyBadge";

function App() {
  return (
    <div className="App">
      <WarningSign text="Latest History Books" />
      <MyBadge color="success" text="OUT NOW !" />
    </div>
  );
}

export default App;
