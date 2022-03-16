import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./component/WarningSign";
import MyBadge from "./component/MyBadge";
import SingleBook from "./component/SingleBook";
import history from "./history.json";
import BookList from "./component/BookList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WarningSign text="Latest History Books" />
        <MyBadge color="success" text="OUT NOW !" />
        <SingleBook book={history[0]} />
        <BookList books={history} />
      </header>
    </div>
  );
}

export default App;
