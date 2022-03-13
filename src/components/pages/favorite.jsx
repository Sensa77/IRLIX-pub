import React from "react";
import Cards from "../cards/cards";
import SearchPanel from "../search-panel/search-panel";
import HeaderWp from "../header-wp/header-wp";

const Favorite = () => {
  return (
    <>
      <HeaderWp title="Избранные"></HeaderWp>
      <Cards searchParams="?isFavorite=true"></Cards>
      <SearchPanel address="/" text="Назад"></SearchPanel>
    </>
  );
};

export default Favorite;
