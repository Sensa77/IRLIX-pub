import React, { useState } from "react";
import CardItem from "../card-item/card-item";
import Empty from "../empty/empty";
import "./cards.scss";
import { useEffect } from "react";
// import { fetchCocktail, getCocktails } from "../../utils/api";
import Spinner from "../spinner/spinner";
import Error from "../error/error";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getCocktailsData } from "./cards-slice";

const Cards = () => {
  const searchValue = useSelector((state) => state.search.value).toLowerCase();
  const [cocktails, setCocktails] = useState([]);
  const { search } = useLocation();
  const [filteredCocktails, setFilteredCocktails] = useState([]);
  const dispatch = useDispatch()
  const cocktailsData = useSelector((state) => state.card.cocktails)
  const status = useSelector((state) => state.card.status)

  // useEffect(() => {
  //   fetch(getCocktails(search))
  //     .then((res) => res.json())
  //     .then((data) => setCocktails(data))
  //     .then(() => setLoading(false))
  //     .catch(() => setError(true));
  // }, [search]);

useEffect(() => {
dispatch(getCocktailsData(search))
}, [search])

  useEffect(() => {
    if (searchValue) {
      const filtered = cocktails.filter(({ name }) => {
        const lowerName = name.toLowerCase();
        return lowerName.includes(searchValue);
      });
      setFilteredCocktails(filtered);
    } else {
      setFilteredCocktails(cocktails)
    }
  }, [searchValue, cocktails]);

  return (
    <main className="cards">
      {status === "loading" && <Spinner />}
      {status === "error" && <Error />}
      {/* {!loading &&
        !error &&
        !filteredCocktails.length &&
        <Empty />
      } */}

      {status === "done" &&
        cocktailsData.map((cocktail) => {
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

  // if (error) {
  //   return <Error />
  // }

  // if (loading) {
  //   return <Spinner />
  // }

  // if(!filteredCocktails.length) {
  //   return <Empty />
  // }

  // );
};

export default Cards;
