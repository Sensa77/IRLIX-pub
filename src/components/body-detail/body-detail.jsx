import React from 'react';
import Ingredients from '../ingredients/ingredients';
import Recipe from '../recipe/recipe';
import Title from '../title/title';
import "./body-detail.scss"

const BodyDetail = () => {
  return (
      <div className='body-wp'>
        <Title></Title>
        <Ingredients></Ingredients>
        <Recipe></Recipe>
      </div>
  )
}

export default BodyDetail