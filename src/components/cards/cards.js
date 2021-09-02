import React from "react";

import CardItem from "../card-item/card-item";
import Bookmark from "../bookmark/bookmark";
import "./cards.scss";

const Cards = () => {
  return (
    <main className="cards">
      <Bookmark>
        <CardItem></CardItem>
      </Bookmark>
    </main>
  );
};

export default Cards;