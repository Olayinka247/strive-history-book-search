import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarningSign from "./component/WarningSign";
import MyBadge from "./component/MyBadge";
import SingleBook from "./component/SingleBook";
import history from "./history.json";
import BookList from "./component/BookList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <header className="App-header">
            <WarningSign text="Latest History Books" />
            <MyBadge color="success" text="OUT NOW !" />
            <SingleBook book={history[0]} />
            <BookList books={history} />
          </header>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
