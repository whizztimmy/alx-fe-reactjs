import { useState } from "react";
import { fetchGitHubUser } from "./services/githubService";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
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
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <UserCard userData={userData} />
    </div>
  );
}

export default App;
