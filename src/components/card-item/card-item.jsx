import React, { useState } from "react";
import "./card-item.scss";
import { Link } from "react-router-dom";
import Bookmark from "../bookmark/bookmark";
import FavoritesIndicator from "../favorites-indicator/favorites-indicator";
import { addFavoriteCocktail } from "../cards/cards-slice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const CardItem = ({ name, comment, alcohol, imgURL, id, isFavorite }) => {
  const dispatch = useDispatch();
  const [bookmark, setBookmark] = useState(isFavorite);
  const [isShow, setIsShow] = useState(false);
  const [timerId, setTimerId] = useState();
  const favoriteBody = {
    isFavorite: !bookmark,
  };

  useEffect(() => {
    if (timerId) {
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [timerId]);

  return (
    <>
      {isShow ? <FavoritesIndicator /> : null}
      <div className="card-item">
        <Bookmark
          className="main__bookmark"
          isFavorite={bookmark}
          onClick={() => {
            dispatch(addFavoriteCocktail({ id, favoriteBody })).then(
              ({ payload }) => {
                setBookmark(payload.isFavorite);
                if (payload.isFavorite) {
                  setIsShow(true);
                  setTimeout(() => setIsShow(false), 2000);
                } else {
                  setIsShow(false);
                }
              }
            );
          }}
        />
        <Link to={`/detail/${id}`}>
          <div
            className="card-item__content"
            style={{ backgroundImage: `url(/assets/${imgURL}.jpg)` }}
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
