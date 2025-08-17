import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/data.json") // looks inside `public/`
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Recipes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((recipe) => (
          <div key={recipe.id} className="p-4 border rounded-lg shadow-md">
            <img src={recipe.image} alt={recipe.title} className="mb-4 rounded" />
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p>{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-600 hover:underline">
              View Recipe
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
