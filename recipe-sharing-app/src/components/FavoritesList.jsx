// src/components/FavouritesList.jsx
import { useRecipeStore } from './recipeStore';

export default function FavouritesList() {
  const favorites = useRecipeStore((state) => state.favorites);

  return (
    <div>
      <h2>Favorites</h2>
      <ul>{favorites.map((f) => <li key={f.id}>{f.title}</li>)}</ul>
    </div>
  );
}
