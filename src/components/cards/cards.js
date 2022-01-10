import React from "react";

import CardItem from "../card-item/card-item";
import Bookmark from "../bookmark/bookmark";
import Empty from "../empty/empty";
import "./cards.scss";

const Cards = () => {
  return (
    <main className="cards">
      <Bookmark>
        <CardItem></CardItem>
      </Bookmark>
      <Bookmark>
        <CardItem></CardItem>
      </Bookmark>
      <Bookmark>
        <CardItem></CardItem>
      </Bookmark>
      <Bookmark>
        <CardItem></CardItem>
      </Bookmark>
      <Bookmark>
        <CardItem></CardItem>
      </Bookmark>
      <Bookmark>
        <CardItem></CardItem>
      </Bookmark>
      <Empty></Empty>
    </main>
  );
};

export default Cards;
