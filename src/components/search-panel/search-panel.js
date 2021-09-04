import React from "react";
import "./search-panel.scss";

const SearchPanel = () => {
  return (
    <footer className="search-panel">
      <button type="button" className="search-panel__button">
        Избранные
      </button>
      <button type="button" className="search-panel__button-search">
        <svg
          className="search-panel__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.6736 20.7495L18.9998 16.0766C18.7889 15.8656 18.5029 15.7485 18.2029 15.7485H17.4388C18.7326 14.0939 19.5014 12.0129 19.5014 9.74905C19.5014 4.36364 15.137 0 9.75071 0C4.36438 0 0 4.36364 0 9.74905C0 15.1345 4.36438 19.4981 9.75071 19.4981C12.0149 19.4981 14.0963 18.7294 15.7512 17.4358V18.1998C15.7512 18.4998 15.8683 18.7857 16.0793 18.9966L20.7531 23.6696C21.1937 24.1101 21.9063 24.1101 22.3423 23.6696L23.6689 22.3431C24.1096 21.9025 24.1096 21.1901 23.6736 20.7495ZM9.75071 15.7485C6.43641 15.7485 3.75027 13.0675 3.75027 9.74905C3.75027 6.43531 6.43172 3.74963 9.75071 3.74963C13.065 3.74963 15.7512 6.43062 15.7512 9.74905C15.7512 13.0628 13.0697 15.7485 9.75071 15.7485Z"
            fill="#C4C1CF"
          />
        </svg>
      </button>
      <input
        className="search-panel__input"
        placeholder="Введите название"
      ></input>
    </footer>
  );
};

export default SearchPanel;
