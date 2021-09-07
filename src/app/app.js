import ErrorBoundary from "../components/error-boundary/error-boundary";
import Header from "../components/header/header";
import Filter from "../components/filter/filter";
import Cards from "../components/cards/cards";
import SearchPanel from "../components/search-panel/search-panel";
import HeaderWp from "../components/header-wp/header-wp";
import "../index.scss";
import "../normalize.scss";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <ErrorBoundary>
        <HeaderWp />
        <Cards />
        <SearchPanel />
      </ErrorBoundary>
    </div>
  );
};
export default App;
