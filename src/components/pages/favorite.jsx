import React from 'react';
import Cards from '../cards/cards';
import SearchPanel from '../search-panel/search-panel';
import HeaderWp from "../header-wp/header-wp"

const Favorite = () => {
  return (
    <div>
    <HeaderWp title="Избранные"></HeaderWp>
      <Cards></Cards>
      <SearchPanel address="/" text="Назад"></SearchPanel>
    </div>
  )
}

export default Favorite