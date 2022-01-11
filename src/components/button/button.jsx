import React from 'react';
import "./button.scss"
import { Link } from 'react-router-dom';

const Button = ({address, text}) => {
  return (<Link to={address}>
    <button type="button" className="search-panel__button">
          {text}
        </button>
        </Link>
  )
}

export default Button