import React from "react";
import "./favorites-indicator.scss";
import ReactDOM from "react-dom";

const FavoritesIndicator = () => {
  const root = document.getElementById("root");
  return ReactDOM.createPortal(
    <div className="favorites-indicator">
      <span className="favorites-indicator__title">Добавлено в избранное</span>
    </div>,
    root
  );
};

export default FavoritesIndicator;
