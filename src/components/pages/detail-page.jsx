import React from "react";
import { useParams } from "react-router";
import BodyDetail from "../body-detail/body-detail";
import HeaderDetail from "../header-detail/header-detail";
import { getCocktail } from "../../utils/api";
import { useEffect } from "react";
import { useState } from "react";

const DetailPage = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState();
  useEffect(() => {
    fetch(getCocktail(id))
      .then((res) => res.json())
      .then((data) => setCocktail(data));
  }, []);

  return (
    <div>
      <HeaderDetail imgUrl={cocktail?.imgURL}></HeaderDetail>
      <BodyDetail
        name={cocktail?.name}
        comment={cocktail?.comment}
        recipe={cocktail?.recipe}
        ingredients={cocktail?.ingredients}
      ></BodyDetail>
    </div>
  );
};

export default DetailPage;
