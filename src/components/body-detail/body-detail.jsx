import React from "react";
import Ingredients from "../ingredients/ingredients";
import Recipe from "../recipe/recipe";
import Title from "../title/title";
import "./body-detail.scss";

const BodyDetail = ({ name, comment, ingredients, recipe }) => {
  return (
    <div className="body-wp">
      <Title name={name} comment={comment}></Title>
      <Ingredients ingredients={ingredients}></Ingredients>
      <Recipe recipe={recipe}></Recipe>
    </div>
  );
};

export default BodyDetail;
