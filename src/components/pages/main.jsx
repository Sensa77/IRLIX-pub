import React from "react";
import HeaderWp from "../header-wp/header-wp";
import Cards from "../cards/cards";
import SearchPanel from "../search-panel/search-panel";
import FavoritesIndicator from "../favorites-indicator/favorites-indicator";

const Main = () => {
  return (
    <>
      <HeaderWp />
      <Cards />
      <SearchPanel address="./favorite" text="Избранные"></SearchPanel>
    </>
  );
};

export default Main;
