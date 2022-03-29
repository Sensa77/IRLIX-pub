import React from "react";
import "./ingredients.scss";

const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients">
      <span className="ingredients__title">Ингридиенты</span>
      <ul className="ingredients__list">
        {ingredients?.map(({ name, amount }) => {
          return (
            <li className="ingredients__item" key={name}>
              <span className="ingredients__name">{name}</span>
              <span className="ingredients__size">{amount}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Ingredients;
