// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/add">Add Recipe</Link>
    </div>
  );
};

export default RecipeList;
