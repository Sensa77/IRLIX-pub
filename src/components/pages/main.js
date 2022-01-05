import React from "react";
import HeaderWp from "../header-wp/header-wp";
import Cards from "../cards/cards";
import SearchPanel from "../search-panel/search-panel";

const Main = () => {
  return (
    <div>
      <HeaderWp />
      <Cards />
      <SearchPanel />
    </div>
  );
};

export default Main;
