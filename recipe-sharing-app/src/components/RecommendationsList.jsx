// src/components/RecommendationList.jsx
import { useRecipeStore } from './recipeStore';

export default function RecommendationList() {
  const recommendations = useRecipeStore((state) => state.recommendations);

  return (
    <div>
      <h2>Recommended</h2>
      <ul>{recommendations.map((r) => <li key={r.id}>{r.title}</li>)}</ul>
    </div>
  );
}
