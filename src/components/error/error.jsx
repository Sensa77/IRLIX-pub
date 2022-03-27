import React from "react";
import "./error.scss";
import icon from "./error.png";
const Error = () => {
  return (
    <div className="error">
      <img src={icon} alt="ошибка" width="300px" height="340px" />
      <span className="error__title">Упс!</span>
      <p className="error__description">
        Кажется у нас что-то сломалось. Приносим свои извинения!
      </p>
    </div>
  );
};
export default Error;
