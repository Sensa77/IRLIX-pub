import React from "react";
import { useParams } from "react-router";
import BodyDetail from "../body-detail/body-detail";
import HeaderDetail from "../header-detail/header-detail";
import { fetchCocktail } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../spinner/spinner";
import Error from "../error/error";

const DetailPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(fetchCocktail(id))
      .then((res) => res.json())
      .then((data) => setCocktail(data))
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
    <>
      <HeaderDetail imgUrl={cocktail.imgURL}></HeaderDetail>
      <BodyDetail
        name={cocktail.name}
        comment={cocktail.comment}
        recipe={cocktail.recipe}
        ingredients={cocktail.ingredients}
      ></BodyDetail>
    </>
  );
};

export default DetailPage;
