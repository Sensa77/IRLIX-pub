import ErrorBoundary from "../components/error-boundary/error-boundary";
import Header from "../components/header/header";
import Filter from "../components/filter/filter";
import Cards from "../components/cards/cards";
import SearchPanel from "../components/search-panel/search-panel";
import HeaderWp from "../components/header-wp/header-wp";
import "../index.scss";
import "../normalize.scss";
import "./app.scss";
import Main from "../components/pages/main";
import DetailPage from "../components/pages/detail-page";
import Favorite from "../components/pages/favorite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/detail" element={<DetailPage />}></Route>
            <Route path="/favorite" element={<Favorite></Favorite>}></Route>
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
};
export default App;
