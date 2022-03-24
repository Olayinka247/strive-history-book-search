import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WarningSign from "./component/WarningSign";
import MyBadge from "./component/MyBadge";
import SingleBook from "./component/SingleBook";
import history from "./history.json";
import BookList from "./component/BookList";
import Registration from "./component/Registration";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "./component/MyNavbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MyNavbar />
        <WarningSign text="Latest History Books" />
        <MyBadge color="success" text="OUT NOW !" />
        <SingleBook book={history[0]} />
        <Registration />

        <Routes>
          <Route path="/" element={<BookList books={history} />} />
          {/* <Route path="/register" element={} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
