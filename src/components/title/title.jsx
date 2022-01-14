import React from "react";
import "./title.scss";

const Title = ({ name, comment }) => {
  return (
    <div className="title-wrap">
      <span className="name">{name}</span>
      <span className="filter">{comment}</span>
    </div>
  );
};
export default Title;
