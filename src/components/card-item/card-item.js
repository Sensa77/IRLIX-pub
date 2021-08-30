import React from "react";
import "./card-item.scss";

const CardItem = () => {
  return (
    <div className="cardItem">
      <span className="cardItem__name">Blackberry</span>
      <span className="cardItem__filter">Fresh drink</span>
      <div className="cardItem__composition">
        <span className="cardItem__composition-perсent">30%</span>
        <span className="cardItem__composition-title">Алкоголь</span>
      </div>
    </div>
  );
};

export default CardItem;
