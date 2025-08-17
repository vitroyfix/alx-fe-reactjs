import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Recipe:", { title, summary });
    alert("Recipe submitted! (not saved to JSON, only demo)");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <textarea
          placeholder="Recipe Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
