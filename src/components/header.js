import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">Главная</h1>
        <span className="header__data">17 июля 2021</span>
      </div>
      <img className="header__logo"></img>
    </header>
  );
};

export default Header;
