import React from 'react';
import CardItem from '../card-item/card-item';
import Header from '../header/header';
import SearchPanel from '../search-panel/search-panel';

const Favorite = () => {
  return (
    <div>
      <Header title='Избранные'></Header>
      <CardItem></CardItem>
      <SearchPanel></SearchPanel>
    </div>
  )
}

export default Favorite