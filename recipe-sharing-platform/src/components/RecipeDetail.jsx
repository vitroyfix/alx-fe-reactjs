import React from "react";
import { useParams, Link } from "react-router-dom";
import data from "../../public/data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-red-600">Recipe not found</p>
        <Link to="/" className="text-blue-600 underline">Go back</Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>

      <h2 className="text-lg font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc ml-6">
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold mt-4">Instructions</h2>
      <ol className="list-decimal ml-6">
        {recipe.instructions.map((step, idx) => (
          <li key={idx} className="mb-1">{step}</li>
        ))}
      </ol>

      <Link to="/" className="block mt-6 text-blue-600 underline">Back to Home</Link>
    </div>
  );
};

export default RecipeDetail;
