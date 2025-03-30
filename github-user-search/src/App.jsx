import { useState } from "react";
import { fetchGitHubUser } from "./services/githubService";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      setError(null);
      const data = await fetchGitHubUser(username);
      setUserData(data);
    } catch {
      setUserData(null);
      setError("User not found");
    }
  };

  return (
    <div className="app">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p>{error}</p>}

      {userData && (
        <div>
          <img src={userData.avatar_url} alt="Avatar" width="100" />
          <p>Name: {userData.name || "N/A"}</p>
          <p>Username: {userData.login}</p>
          <p>
            Profile: <a href={userData.html_url} target="_blank">View on GitHub</a>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
