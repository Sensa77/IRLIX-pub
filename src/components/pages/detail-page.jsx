import React from "react";
import { useParams } from "react-router";
import BodyDetail from "../body-detail/body-detail";
import HeaderDetail from "../header-detail/header-detail";
import { getCocktail } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";
import Spinner from "../spinner/spinner";

const DetailPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(getCocktail(id))
      .then((res) => res.json())
      .then((data) => setCocktail(data))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <HeaderDetail imgUrl={cocktail.imgURL}></HeaderDetail>
      <BodyDetail
        name={cocktail.name}
        comment={cocktail.comment}
        recipe={cocktail.recipe}
        ingredients={cocktail.ingredients}
      ></BodyDetail>
    </div>
  );
};

export default DetailPage;
