import React from "react";
import "./card-item.scss";
import { Link } from "react-router-dom";
const CardItem = ({name, comment, alcohol, imgURL}) => {
  return (
    <Link to="/detail">
      <div className="cardItem" style={{backgroundImage: `url(/assets/${imgURL}.jpg)`}}>
        <div className="cardItem__wp">
          <span className="cardItem__name">{name}</span>
          <span className="cardItem__filter">{comment}</span>
        </div>
        <div className="cardItem__composition">
          <span className="cardItem__composition-perсent">{alcohol}%</span>
          <span className="cardItem__composition-title">Алкоголь</span>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
