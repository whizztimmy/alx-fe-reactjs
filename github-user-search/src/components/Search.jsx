import { useState } from "react";

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Function to fetch user suggestions
  const fetchSuggestions = async (query) => {
    if (!query) return setSuggestions([]);
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json();
      setSuggestions(data.items || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSearch({ username, location, repos });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-800 text-white rounded-md shadow-md max-w-md mx-auto">
      <div className="mb-4">
        <label className="block mb-1">Username:</label>
        <input
          type="text"
          className="w-full p-2 text-black rounded"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            fetchSuggestions(e.target.value);
          }}
        />
        {/* Show suggestions */}
        {suggestions.length > 0 && (
          <ul className="bg-white text-black rounded shadow-md mt-1">
            {suggestions.slice(0, 5).map((user) => (
              <li key={user.id} className="p-2 cursor-pointer hover:bg-gray-300" onClick={() => setUsername(user.login)}>
                {user.login}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-1">Location:</label>
        <input
          type="text"
          className="w-full p-2 text-black rounded"
          placeholder="Enter location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Min Repositories:</label>
        <input
          type="number"
          className="w-full p-2 text-black rounded"
          placeholder="Minimum number of repositories"
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
        />
      </div>

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
        Search
      </button>
    </form>
  );
};

export default Search;
