import React from "react";
import "./recipe.scss";

const Recipe = ({ recipe = [] }) => {
  return (
    <div className="recipe">
      <span className="recipe__title">Как готовить</span>
      <ul className="recipe__text">
        {recipe.map((text) => {
          return <li key={text}>{text}</li>;
        })}
      </ul>
    </div>
  );
};
export default Recipe;
