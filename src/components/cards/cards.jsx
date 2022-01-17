import React, { useState } from "react";
import CardItem from "../card-item/card-item";
import Bookmark from "../bookmark/bookmark";
import Empty from "../empty/empty";
import "./cards.scss";
import { useEffect } from "react";
import { getCocktail, getCocktails } from "../../utils/api";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

const Cards = () => {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(getCocktails())
      .then((res) => res.json())
      .then((data) => setCocktails(data))
      .then(() => setLoading(false))
      .catch(() => setError(true));
  }, []);

  if (error) {
    return <Error></Error>;
  }

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <main className="cards">
      {cocktails.map((cocktail) => {
        return (
          <div>
            <CardItem
              key={cocktail.name}
              name={cocktail.name}
              comment={cocktail.comment}
              alcohol={cocktail.alcohol}
              imgURL={cocktail.imgURL}
              id={cocktail.id}
            ></CardItem>
          </div>
        );
      })}
    </main>
  );
};

export default Cards;
