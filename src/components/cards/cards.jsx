import React, { useState, useEffect } from "react";
import CardItem from "../card-item/card-item";
import "./cards.scss";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getCocktailsData } from "./cards-slice";
import Empty from "../empty/empty";

const Cards = ({ searchParams }) => {
  const searchValue = useSelector((state) => state.cards.value).toLowerCase();
  const { search } = useLocation();
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const dispatch = useDispatch();
  const cocktailsData = useSelector((state) => state.cards.cocktails);
  const status = useSelector((state) => state.cards.status);

  useEffect(() => {
    dispatch(getCocktailsData(searchParams || search));
  }, [search, searchParams, dispatch]);

  useEffect(() => {
    if (searchValue) {
      const filtered = cocktailsData.filter(({ name }) => {
        const lowerName = name.toLowerCase();
        return lowerName.includes(searchValue);
      });
      setFilteredCocktails(filtered);
    } else {
      setFilteredCocktails(cocktailsData);
    }
  }, [searchValue, cocktailsData]);

  return (
    <main className="cards">
      {status === "loading" && <Spinner />}
      {status === "error" && <Error />}
      {status === "done" && !filteredCocktails.length && <Empty />}
      {status === "done" &&
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
