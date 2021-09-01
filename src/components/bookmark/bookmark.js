import React from "react";

import CardItem from "../card-item/card-item";

const Bookmark = ({ children }) => {
  return (
    <div className="bookmark">
      <button type="button" className="bookmark__btn"></button>
      {children}
    </div>
  );
};

export default Bookmark;
