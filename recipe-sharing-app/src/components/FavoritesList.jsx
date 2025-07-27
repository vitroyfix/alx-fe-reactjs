import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  const favRecipes = favorites.map(id => recipes.find(r => r.id === id)).filter(Boolean);

  return (
    <div>
      <h2>My Favorites</h2>
      {favRecipes.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
