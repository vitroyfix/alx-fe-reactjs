// src/components/EditRecipeForm.jsx
import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

export default function EditRecipeForm({ recipe }) {
  const [title, setTitle] = useState(recipe.title);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({ ...recipe, title });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Update</button>
    </form>
  );
}
