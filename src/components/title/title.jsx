import React from "react";
import "./title.scss";

const Title = ({ name, comment }) => {
  return (
    <div className="title">
      <span className="title__name">{name}</span>
      <span className="title__filter">{comment}</span>
    </div>
  );
};
export default Title;
