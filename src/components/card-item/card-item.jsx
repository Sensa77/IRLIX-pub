import React from "react";
import "./card-item.scss";
import { Link } from "react-router-dom";
import Bookmark from "../bookmark/bookmark";

const CardItem = ({ name, comment, alcohol, imgURL, id, isFavorite }) => {
  return (
    <>
      <div className="card-item">
        <Bookmark className="main__bookmark" id={id} isFavorite={isFavorite} />
        <Link to={`/detail/${id}`}>
          <div
            className="card-item__content"
            style={{
              backgroundImage: `url(/IRLIX-pub/assets/min/${imgURL}.jpg)`,
            }}
          >
            <div className="card-item__composition">
              <span className="card-item__composition-perсent">{alcohol}%</span>
              <span className="card-item__composition-title">Алкоголь</span>
            </div>
            <div className="card-item__wp">
              <span className="card-item__name">{name}</span>
              <span className="card-item__filter">{comment}</span>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default CardItem;
