// src/components/RecipeDetail.jsx
import React from 'react';

const RecipeDetail = ({ recipe }) => {
  if (!recipe) return <p>No recipe selected</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
      <ul>
        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
      </ul>
    </div>
  );
};

export default RecipeDetail;
