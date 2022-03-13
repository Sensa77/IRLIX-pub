import React, { useEffect, useState } from "react";
import "./card-item.scss";
import { Link } from "react-router-dom";
import Bookmark from "../bookmark/bookmark";
import { fetchCocktail } from "../../utils/api";
import FavoritesIndicator from "../favorites-indicator/favorites-indicator";
const CardItem = ({ name, comment, alcohol, imgURL, id, isFavorite }) => {
  const [bookmark, setBookmark] = useState(isFavorite);
  const [isShow, setIsShow] = useState(false);
  const [timerId, setTimerId] = useState();
  const addFavorite = (id) => {
    const favoriteBody = {
      isFavorite: !isFavorite,
    };

    fetch(fetchCocktail(id), {
      method: "PUT",
      body: JSON.stringify(favoriteBody),
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    })
      .then(() => setBookmark(!bookmark))
      .then(() => {
        if (bookmark === false) {
          setIsShow(true);
          setTimerId(setTimeout(() => setIsShow(false), 5000));
        } else {
          setIsShow(false);
        }
      });
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
        <Bookmark isFavorite={bookmark} onClick={() => addFavorite(id)} />
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
