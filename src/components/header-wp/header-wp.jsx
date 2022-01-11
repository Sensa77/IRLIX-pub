import React from "react";
import "./header-wp.scss";
import "../header/header";
import "../filter/filter";
import Header from "../header/header";
import Filter from "../filter/filter";

const HeaderWp = ({ title }) => {
  return (
    <div className="header-wp">
      <Header title={title}></Header>
      <Filter></Filter>
    </div>
  );
};

export default HeaderWp;
