import React from "react";
import "./header-wp.scss";
import "../header/header";
import "../filter/filter";
import Header from "../header/header";
import Filter from "../filter/filter";

const HeaderWp = () => {
  return (
    <div className="header-wp">
      <Header></Header>
      <Filter></Filter>
    </div>
  );
};

export default HeaderWp;
