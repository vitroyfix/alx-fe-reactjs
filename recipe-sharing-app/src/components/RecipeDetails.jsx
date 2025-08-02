// src/components/RecipeDetail.jsx
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function RecipeDetails() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  return recipe ? (
    <div>
      <h2>{recipe.title}</h2>
    </div>
  ) : (
    <p>Recipe not found</p>
  );
}
