import React, { useState } from "react";
import CardItem from "../card-item/card-item";
import Empty from "../empty/empty";
import "./cards.scss";
import { useEffect } from "react";
import { getCocktails } from "../../utils/api";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";

const Cards = ({ searchParams }) => {
  const searchValue = useSelector((state) => state.search.value).toLowerCase();
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { search } = useLocation();
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  useEffect(() => {
    fetch(getCocktails(searchParams || search))
      .then((res) => res.json())
      .then((data) => setCocktails(data))
      .then(() => setLoading(false))
      .catch(() => setError(true));
  }, [search, searchParams]);

  useEffect(() => {
    if (searchValue) {
      const filtered = cocktails.filter(({ name }) => {
        const lowerName = name.toLowerCase();
        return lowerName.includes(searchValue);
      });
      setFilteredCocktails(filtered);
    } else {
      setFilteredCocktails(cocktails);
    }
  }, [searchValue, cocktails]);

  return (
    <main className="cards">
      {loading && <Spinner />}
      {error && <Error />}
      {!loading && !error && !filteredCocktails.length && <Empty />}

      {!loading &&
        !error &&
        !!filteredCocktails.length &&
        filteredCocktails.map((cocktail) => {
          return (
            <CardItem
              key={cocktail.name}
              name={cocktail.name}
              comment={cocktail.comment}
              alcohol={cocktail.alcohol}
              imgURL={cocktail.imgURL}
              id={cocktail.id}
              isFavorite={cocktail.isFavorite}
            />
          );
        })}
    </main>
  );
};

export default Cards;
