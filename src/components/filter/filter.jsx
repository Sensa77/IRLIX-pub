import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./filter.scss";

const Filter = () => {
  const { search } = useLocation();
  return (
    <div className="filter">
      <ul className="filter__list">
        <li>
          <Link to={`/?isNew=true`}>
            <button
              type="button"
              className="filter__item"
              style={{
                border: search === "?isNew=true" ? "2px solid white" : "none",
              }}
            >
              Новинки
            </button>
          </Link>
        </li>
        <li>
          <Link to={`/?isSweet=true`}>
            <button
              type="button"
              className="filter__item"
              style={{
                border: search === "?isSweet=true" ? "2px solid white" : "none",
              }}
            >
              Сладкие
            </button>
          </Link>
        </li>
        <li>
          <Link to={`/?isHit=true`}>
            <button
              type="button"
              className="filter__item"
              style={{
                border: search === "?isHit=true" ? "2px solid white" : "none",
              }}
            >
              Хит
            </button>
          </Link>
        </li>
        <li>
          <Link to={`/?isStrong=true`}>
            <button
              type="button"
              className="filter__item"
              style={{
                border:
                  search === "?isStrong=true" ? "2px solid white" : "none",
              }}
            >
              Крепкие
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
