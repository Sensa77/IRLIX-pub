import React from "react";
import "./card-item.scss";
import { Link } from "react-router-dom";
const CardItem = () => {
  return (
    <Link to="/detail">
      <div className="cardItem">
        <div className="cardItem__wp">
          <span to="/detail" className="cardItem__name">
            Blackberry
          </span>
          <span className="cardItem__filter">Fresh drink</span>
        </div>
        <div className="cardItem__composition">
          <span className="cardItem__composition-perсent">30%</span>
          <span className="cardItem__composition-title">Алкоголь</span>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
