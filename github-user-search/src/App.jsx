import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchAdvancedUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchAdvancedUsers(searchParams);
      if (data.length === 0) {
        setError("No users found with the given filters.");
      } else {
        setUsers(data);
      }
    } catch (err) {
      setError("Something went wrong. Please check your internet or try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="text-yellow-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded shadow flex items-center gap-4"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
