// src/components/RecipeDetail.jsx
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

export default function RecipeDetail() {
  const { id } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === parseInt(id))
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p><strong>ID:</strong> {recipe.id}</p>
      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients?.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h4>Instructions:</h4>
      <p>{recipe.instructions}</p>
    </div>
  );
}
