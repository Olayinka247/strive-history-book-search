import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./component/WarningSign";
import MyBadge from "./component/MyBadge";
import SingleBook from "./component/SingleBook";
import history from "./history.json";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="Latest History Books" />
        <MyBadge color="success" text="OUT NOW !" />
        <SingleBook books={history[0]} />
      </header>
    </div>
  );
}

export default App;
