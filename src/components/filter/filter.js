import React from "react";
import "./filter.scss";

const Filter = () => {
  return (
    <nav className="filter">
      <ul className="filter__list">
        <li>
          <button type="button" className="filter__item">
            Новинки
          </button>
        </li>
        <li>
          <button type="button" className="filter__item">
            Сладкие
          </button>
        </li>
        <li>
          <button type="button" className="filter__item">
            Хит
          </button>
        </li>
        <li>
          <button type="button" className="filter__item">
            Крепкие
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Filter;
