import React from "react";

const SearchPanel = () => {
  return (
    <footer className="searchPanel">
      <button type="button" className="searchPanel__button">
        Избранные
      </button>
      <button type="button" className="searchPanel__button-search">
        <img className="searchPanel__icon"></img>
      </button>
      <input
        className="searchPanel__input"
        placeholder="Введите название"
      ></input>
    </footer>
  );
};

export default SearchPanel;
