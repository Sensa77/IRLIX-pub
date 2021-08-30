import ErrorBoundary from "./components/error-boundary";
import Header from "./components/header";
import Filter from "./components/filter";
import Cards from "./components/cards";
import SearchPanel from "./components/search-panel";

const App = () => {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <Filter />
        <Cards />
        <SearchPanel />
      </ErrorBoundary>
    </div>
  );
};
export default App;
