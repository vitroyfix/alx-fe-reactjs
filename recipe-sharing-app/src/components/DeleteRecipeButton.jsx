// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  return (
    <button onClick={() => deleteRecipe(recipeId)}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
