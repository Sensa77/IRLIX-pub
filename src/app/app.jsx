import ErrorBoundary from "../components/error-boundary/error-boundary";
import "../index.scss";
import "../normalize.scss";
import "./app.scss";
import Main from "../components/pages/main";
import DetailPage from "../components/pages/detail-page/detail-page";
import Favorite from "../components/pages/favorite";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <Router>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/detail/:id" element={<DetailPage />}></Route>
            <Route path="/favorite" element={<Favorite></Favorite>}></Route>
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
};
export default App;
