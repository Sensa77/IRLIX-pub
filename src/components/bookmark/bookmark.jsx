import React from "react";
import "./bookmark.scss";

const Bookmark = ({isFavorite, onClick}) => {

  const active = isFavorite ? "bookmark--active" : ""
  return (
    <button type="button" className={`bookmark ${active}`} onClick={onClick}>
      {" "}
      <svg
        width="20"
        height="33"
        viewBox="0 0 20 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 0H2C1.46957 0 0.96086 0.210714 0.585787 0.585786C0.210715 0.960859 6.3813e-07 1.46957 6.3813e-07 2V29.93C-0.000315943 30.3264 0.117168 30.7139 0.337535 31.0434C0.557902 31.3729 0.871212 31.6295 1.23768 31.7806C1.60416 31.9317 2.00726 31.9705 2.39582 31.892C2.78438 31.8136 3.14086 31.6214 3.42 31.34L9.96 24.82L16.59 31.42C16.8703 31.6986 17.2268 31.8879 17.6146 31.9641C18.0024 32.0403 18.404 31.9998 18.7688 31.8479C19.1337 31.696 19.4453 31.4394 19.6644 31.1105C19.8835 30.7816 20.0003 30.3952 20 30V2C20 1.46957 19.7893 0.960859 19.4142 0.585786C19.0391 0.210714 18.5304 0 18 0Z"
        />
      </svg>
    </button>
  );
};

export default Bookmark;
